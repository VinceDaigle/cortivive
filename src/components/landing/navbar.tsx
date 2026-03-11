"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-charcoal">
          Corti<span className="text-coral">Vive</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-charcoal/70 hover:text-charcoal transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/lead-magnet"
            className="text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Free Reset Guide
          </Link>
          <Link href="/auth/signin">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-charcoal/10 px-4 py-4 space-y-3">
          <Link
            href="#how-it-works"
            className="block text-charcoal/70"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="block text-charcoal/70"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/lead-magnet"
            className="block text-charcoal/70"
            onClick={() => setMobileOpen(false)}
          >
            Free Reset Guide
          </Link>
          <div className="flex gap-3 pt-2">
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
