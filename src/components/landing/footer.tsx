import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Corti<span className="text-coral">Vive</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Science-backed cortisol management for women who are done fighting
              their own bodies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/lead-magnet" className="hover:text-white transition-colors">
                  Free 7-Day Guide
                </Link>
              </li>
              <li>
                <Link href="/auth/signin" className="hover:text-white transition-colors">
                  Member Sign In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="cursor-default">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-default">Terms of Service</span>
              </li>
              <li>
                <span className="cursor-default">Disclaimer</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              This site does not provide medical advice. Consult your healthcare
              provider before starting any new health program.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} CortiVive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
