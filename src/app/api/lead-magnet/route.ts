import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Save lead
    await prisma.leadCapture.upsert({
      where: { email },
      update: {},
      create: { email, source: "lead-magnet" },
    });

    // Send email with PDF link
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "CortiVive <noreply@cortivive.com>",
      to: email,
      subject: "Your 7-Day Cortisol Reset Guide is here!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2D2D2D;">Your Cortisol Reset Starts Now</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Thank you for downloading the 7-Day Cortisol Reset Guide! This is the exact protocol
            our members use in their first week to start lowering cortisol and reducing belly bloating.
          </p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/lead-magnet.pdf"
             style="display: inline-block; background: #E8836B; color: white; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; margin: 20px 0;">
            Download Your Guide (PDF)
          </a>
          <p style="color: #666; font-size: 14px; line-height: 1.6; margin-top: 20px;">
            Ready for the full protocol? Join CortiVive for weekly routines, meal plans, and
            progress tracking — just $9.99/month.
          </p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/pricing"
             style="color: #E8836B; font-weight: 600; text-decoration: none;">
            Learn more about the membership &rarr;
          </a>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
