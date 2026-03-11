import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const PLANS = {
  membership: {
    name: "CortiVive Membership",
    price: 999, // $9.99 in cents
    priceId: process.env.STRIPE_PRICE_ID!,
  },
} as const;
