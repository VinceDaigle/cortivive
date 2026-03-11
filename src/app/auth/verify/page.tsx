import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
      <div className="max-w-md w-full text-center">
        <div className="text-5xl mb-4">✉️</div>
        <h1 className="text-3xl font-bold text-charcoal mb-4">
          Check your email
        </h1>
        <p className="text-charcoal/60 mb-2">
          A sign-in link has been sent to your email address.
        </p>
        <p className="text-charcoal/40 text-sm">
          Click the link in the email to access your account. The link expires
          in 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 text-sm text-charcoal/50 hover:text-charcoal"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
