import Link from "next/link";
import { Button } from "../ui/button";

export function LeadMagnetCta() {
  return (
    <section className="py-20 px-4 bg-sage/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Not ready to commit? Start free.
        </h2>
        <p className="text-lg text-charcoal/60 mb-8 max-w-xl mx-auto">
          Get our <strong>7-Day Cortisol Reset Guide</strong> — the exact
          protocol to start lowering your cortisol and reducing bloating this
          week. Free, no strings attached.
        </p>

        <Link href="/lead-magnet">
          <Button variant="secondary" size="lg">
            Download the Free Guide
          </Button>
        </Link>

        <p className="mt-4 text-sm text-charcoal/40">
          Instant PDF download. We&apos;ll also send you weekly tips.
        </p>
      </div>
    </section>
  );
}
