export function Problem() {
  const problems = [
    {
      icon: "😤",
      title: "You've tried everything",
      description:
        "Calorie counting, HIIT, keto, intermittent fasting — nothing targets the real problem.",
    },
    {
      icon: "😴",
      title: "You're exhausted but wired",
      description:
        "Can't sleep, can't relax, running on caffeine and willpower. Your body is in survival mode.",
    },
    {
      icon: "🫠",
      title: "The belly won't budge",
      description:
        "No matter how little you eat or how hard you exercise, that stubborn belly fat stays put.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            It&apos;s not your fault. When cortisol stays elevated, your body
            literally stores fat around your midsection as a stress response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl bg-cream/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-charcoal/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
