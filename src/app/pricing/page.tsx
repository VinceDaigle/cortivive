"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  const features = [
    "Weekly cortisol-lowering movement routines",
    "Anti-inflammatory meal plans (new each week)",
    "Daily stress management protocols",
    "Progress tracking dashboard",
    "Access to full content library",
    "New content added every single week",
  ];

  const bonuses = [
    "7-Day Cortisol Reset Quick-Start Guide",
    "Grocery shopping list templates",
    "Breathwork audio guides",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Your cortisol reset starts now.
            </h1>
            <p className="text-lg text-charcoal/60 max-w-xl mx-auto">
              One simple membership. Everything you need to lower cortisol,
              reduce belly bloating, and finally feel like yourself again.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-coral/20 p-8 md:p-10 shadow-xl max-w-lg mx-auto">
            <div className="text-center mb-8">
              <div className="text-sm font-medium text-coral uppercase tracking-wider mb-3">
                CortiVive Membership
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-6xl font-bold text-charcoal">$9</span>
                <span className="text-3xl font-bold text-charcoal">.99</span>
                <span className="text-charcoal/50 text-lg ml-1">/mo</span>
              </div>
              <p className="text-charcoal/50 text-sm">
                Billed monthly. Cancel anytime.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-charcoal mb-3">
                What you get:
              </h3>
              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-sage shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-charcoal/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sage/5 rounded-xl p-4 mb-8">
              <h3 className="font-semibold text-charcoal mb-2">
                Plus these bonuses:
              </h3>
              <ul className="space-y-2">
                {bonuses.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-coral shrink-0">+</span>
                    <span className="text-charcoal/70 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={handleSubscribe}
              disabled={loading}
            >
              {loading ? "Redirecting to checkout..." : "Start My Reset — $9.99/mo"}
            </Button>

            <p className="mt-4 text-xs text-charcoal/40 text-center">
              Secure checkout via Stripe. Cancel in one click, anytime.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal/50 mb-2">Not ready to commit?</p>
            <Link href="/lead-magnet" className="text-coral hover:text-coral-dark font-medium">
              Get the free 7-Day Cortisol Reset Guide &rarr;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
