export function Solution() {
  const features = [
    {
      step: "01",
      title: "Weekly Cortisol Routines",
      description:
        "Gentle, science-backed movement routines specifically designed to lower cortisol — not spike it. No HIIT. No burnout.",
      color: "bg-coral/10 text-coral",
    },
    {
      step: "02",
      title: "Anti-Inflammatory Meal Plans",
      description:
        "Delicious meals that calm your stress response and reduce bloating. No calorie counting, no restriction — just healing food.",
      color: "bg-sage/10 text-sage-dark",
    },
    {
      step: "03",
      title: "Stress Management Protocols",
      description:
        "Daily micro-practices (5-10 min) that retrain your nervous system. Breathwork, journaling prompts, and wind-down rituals.",
      color: "bg-coral/10 text-coral",
    },
    {
      step: "04",
      title: "Progress Tracking",
      description:
        "Track your mood, stress, sleep, and bloating daily. Watch the patterns shift as your cortisol comes down.",
      color: "bg-sage/10 text-sage-dark",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            The CortiVive Protocol
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            A complete system to lower your cortisol, reduce inflammation, and
            finally lose the stress belly — from the inside out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.step}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-charcoal/5 hover:shadow-md transition-shadow"
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center font-bold text-lg`}
              >
                {feature.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
