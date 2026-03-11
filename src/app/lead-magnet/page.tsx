"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LeadMagnetPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-charcoal mb-4">
            Check your inbox!
          </h1>
          <p className="text-charcoal/60 mb-6">
            Your <strong>7-Day Cortisol Reset Guide</strong> is on its way.
            While you wait, check out the full CortiVive membership:
          </p>
          <Link href="/pricing">
            <Button size="lg">See Full Membership — $9.99/mo</Button>
          </Link>
          <div className="mt-4">
            <Link href="/" className="text-sm text-charcoal/50 hover:text-charcoal">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
      <div className="max-w-lg w-full">
        <Link
          href="/"
          className="text-sm text-charcoal/50 hover:text-charcoal mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/5">
          <div className="text-center mb-8">
            <div className="inline-block bg-sage/10 text-sage-dark font-medium px-4 py-1.5 rounded-full text-sm mb-4">
              100% Free — No Credit Card
            </div>
            <h1 className="text-3xl font-bold text-charcoal mb-3">
              7-Day Cortisol Reset Guide
            </h1>
            <p className="text-charcoal/60">
              The exact protocol to start lowering your cortisol and reducing
              bloating — starting today.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "7 daily cortisol-lowering routines (10 min each)",
              "Anti-inflammatory breakfast recipes",
              "Evening wind-down protocol for better sleep",
              "Stress trigger identification worksheet",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
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
                <span className="text-charcoal/70 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Me the Free Guide"}
            </Button>
          </form>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-4 text-xs text-charcoal/40 text-center">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
