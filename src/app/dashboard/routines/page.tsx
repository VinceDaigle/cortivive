import { getWeekContent } from "@/content/loader";

export default function RoutinesPage() {
  const content = getWeekContent(1);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          This Week&apos;s Routines
        </h1>
        <p className="text-charcoal/60">
          Gentle, cortisol-lowering movement — never intense enough to spike
          your stress hormones.
        </p>
      </div>

      <div className="space-y-6">
        {content.routines.map((routine, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-charcoal/10 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-coral/10 rounded-xl flex items-center justify-center text-coral font-bold shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-charcoal mb-1">
                  {routine.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-charcoal/50 mb-3">
                  <span>{routine.duration}</span>
                  <span>·</span>
                  <span>{routine.intensity}</span>
                </div>
                <p className="text-charcoal/60 mb-4 leading-relaxed">
                  {routine.description}
                </p>
                <div className="bg-cream/80 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-charcoal mb-2">
                    Steps:
                  </h4>
                  <ol className="space-y-2">
                    {routine.steps.map((step, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-charcoal/70"
                      >
                        <span className="text-sage font-medium shrink-0">
                          {j + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
