import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe, PLANS } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const session = await auth();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    let customerEmail: string | undefined;
    let customerId: string | undefined;

    if (session?.user?.id) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });
      if (user?.stripeCustomerId) {
        customerId = user.stripeCustomerId;
      } else {
        customerEmail = session.user.email ?? undefined;
      }
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: PLANS.membership.priceId,
          quantity: 1,
        },
      ],
      ...(customerId
        ? { customer: customerId }
        : { customer_email: customerEmail }),
      success_url: `${appUrl}/dashboard?checkout=success`,
      cancel_url: `${appUrl}/pricing?checkout=canceled`,
      metadata: {
        userId: session?.user?.id || "",
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
