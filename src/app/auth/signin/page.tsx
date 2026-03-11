"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await signIn("resend", { email, callbackUrl: "/dashboard" });
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
        <div className="max-w-md w-full text-center">
          <div className="text-5xl mb-4">✉️</div>
          <h1 className="text-3xl font-bold text-charcoal mb-4">
            Check your email
          </h1>
          <p className="text-charcoal/60">
            We sent a magic link to <strong>{email}</strong>. Click the link to
            sign in — no password needed.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-sm text-charcoal/50 hover:text-charcoal"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
      <div className="max-w-md w-full">
        <Link
          href="/"
          className="text-sm text-charcoal/50 hover:text-charcoal mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/5">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-bold text-charcoal">
              Corti<span className="text-coral">Vive</span>
            </Link>
            <h1 className="text-2xl font-bold text-charcoal mt-4 mb-2">
              Welcome back
            </h1>
            <p className="text-charcoal/60">
              Sign in with your email — we&apos;ll send you a magic link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending link..." : "Send Magic Link"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-charcoal/50">
              Don&apos;t have an account?{" "}
              <Link href="/pricing" className="text-coral hover:text-coral-dark font-medium">
                Subscribe here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
