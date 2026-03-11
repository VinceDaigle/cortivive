import { Card } from "../ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "After 2 weeks, the bloating was visibly reduced. I finally feel like my body isn't fighting me anymore.",
      name: "Sarah M.",
      detail: "Lost 3 inches in 6 weeks",
    },
    {
      quote:
        "I was skeptical — another program? But this one actually addresses WHY the weight won't come off. Game changer.",
      name: "Jennifer K.",
      detail: "Sleeping through the night again",
    },
    {
      quote:
        "The meal plans are so easy. I'm not hungry, I'm not stressed about food, and the belly is finally going down.",
      name: "Lisa R.",
      detail: "Down 8 lbs in 4 weeks",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Real results from real women
          </h2>
          <p className="text-lg text-charcoal/60">
            Women just like you who finally cracked the cortisol code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} hover>
              <div className="flex flex-col h-full">
                <div className="text-coral text-3xl mb-3">&ldquo;</div>
                <p className="text-charcoal/70 leading-relaxed flex-1 mb-4">
                  {t.quote}
                </p>
                <div className="border-t border-charcoal/10 pt-4">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-sage-dark">{t.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
