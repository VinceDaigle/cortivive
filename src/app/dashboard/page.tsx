import Link from "next/link";
import { auth } from "@/lib/auth";
import { ContentCard } from "@/components/dashboard/content-card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "there";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Hey {firstName} 👋
        </h1>
        <p className="text-charcoal/60">
          Here&apos;s your weekly overview. Small steps, big changes.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div className="bg-coral/10 rounded-2xl p-5">
          <div className="text-sm font-medium text-coral mb-1">This Week</div>
          <div className="text-2xl font-bold text-charcoal">Week 1</div>
          <div className="text-sm text-charcoal/60 mt-1">
            Foundation &amp; Reset
          </div>
        </div>
        <div className="bg-sage/10 rounded-2xl p-5">
          <div className="text-sm font-medium text-sage-dark mb-1">
            Daily Focus
          </div>
          <div className="text-2xl font-bold text-charcoal">Lower Cortisol</div>
          <div className="text-sm text-charcoal/60 mt-1">
            Gentle movement + breathwork
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-charcoal mb-4">
        Today&apos;s Protocol
      </h2>

      <div className="space-y-4 mb-8">
        <Link href="/dashboard/routines">
          <ContentCard
            icon="🧘‍♀️"
            title="Morning Cortisol Routine"
            description="10-minute gentle movement sequence to lower cortisol before it spikes."
            tag="Movement"
          />
        </Link>

        <Link href="/dashboard/meals">
          <ContentCard
            icon="🥗"
            title="Today's Anti-Inflammatory Meals"
            description="Breakfast, lunch, dinner + snack — all designed to reduce inflammation."
            tag="Nutrition"
          />
        </Link>

        <ContentCard
          icon="🌙"
          title="Evening Wind-Down"
          description="5-minute breathwork + journaling prompt to calm your nervous system before sleep."
          tag="Stress"
        />

        <Link href="/dashboard/tracker">
          <ContentCard
            icon="📊"
            title="Daily Check-In"
            description="Log your mood, stress, bloating, and sleep. Track your progress over time."
            tag="Track"
          >
            <Button size="sm" variant="secondary">
              Log Today&apos;s Check-In
            </Button>
          </ContentCard>
        </Link>
      </div>
    </div>
  );
}
