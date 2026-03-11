"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const { data: session } = useSession();
  const [portalLoading, setPortalLoading] = useState(false);

  async function handleManageSubscription() {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setPortalLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">Account</h1>
        <p className="text-charcoal/60">
          Manage your subscription and account settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <div className="bg-white rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-lg font-semibold text-charcoal mb-4">Profile</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal/60">Email</span>
              <span className="text-sm font-medium text-charcoal">
                {session?.user?.email || "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal/60">Name</span>
              <span className="text-sm font-medium text-charcoal">
                {session?.user?.name || "Not set"}
              </span>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-2xl border border-charcoal/10 p-6">
          <h2 className="text-lg font-semibold text-charcoal mb-4">
            Subscription
          </h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-medium text-charcoal">
                CortiVive Membership
              </div>
              <div className="text-sm text-charcoal/60">$9.99/month</div>
            </div>
            <span className="inline-block bg-sage/10 text-sage-dark text-xs font-medium px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleManageSubscription}
            disabled={portalLoading}
          >
            {portalLoading
              ? "Opening portal..."
              : "Manage Subscription"}
          </Button>
          <p className="mt-2 text-xs text-charcoal/40">
            Update payment method, view invoices, or cancel your subscription.
          </p>
        </div>

        {/* Sign Out */}
        <div className="bg-white rounded-2xl border border-charcoal/10 p-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
