import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block bg-coral/10 text-coral font-medium px-4 py-1.5 rounded-full text-sm mb-6">
          Join 500+ women reclaiming their body
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6">
          Your cortisol is keeping
          <br />
          the weight on.{" "}
          <span className="text-coral">We fix that.</span>
        </h1>

        <p className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Weekly cortisol-reduction routines, anti-inflammatory meal plans, and
          stress protocols designed specifically for women battling stubborn
          belly fat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing">
            <Button size="lg">
              Start Your Reset — $9.99/mo
            </Button>
          </Link>
          <Link href="/lead-magnet">
            <Button variant="outline" size="lg">
              Get Free 7-Day Guide
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-charcoal/50">
          Cancel anytime. No contracts. No BS.
        </p>
      </div>
    </section>
  );
}
