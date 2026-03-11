import Link from "next/link";
import { Button } from "../ui/button";

export function Pricing() {
  const features = [
    "Weekly cortisol-lowering routines",
    "Anti-inflammatory meal plans",
    "Daily stress management protocols",
    "Progress tracking dashboard",
    "New content every week",
    "Cancel anytime — no contracts",
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Simple pricing. Real results.
        </h2>
        <p className="text-lg text-charcoal/60 mb-10">
          Less than a coffee a week for a complete cortisol reset system.
        </p>

        <div className="bg-white rounded-3xl border-2 border-coral/20 p-8 shadow-lg">
          <div className="text-sm font-medium text-coral uppercase tracking-wider mb-2">
            CortiVive Membership
          </div>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-charcoal">$9</span>
            <span className="text-2xl font-bold text-charcoal">.99</span>
            <span className="text-charcoal/50 ml-1">/month</span>
          </div>
          <p className="text-charcoal/50 text-sm mb-8">
            Billed monthly. Cancel anytime.
          </p>

          <ul className="text-left space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
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
                <span className="text-charcoal/70">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/pricing">
            <Button size="lg" className="w-full">
              Start Your Reset Today
            </Button>
          </Link>

          <p className="mt-4 text-xs text-charcoal/40">
            Secure payment via Stripe. 100% satisfaction guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
