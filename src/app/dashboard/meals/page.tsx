import { getWeekContent } from "@/content/loader";

export default function MealsPage() {
  const content = getWeekContent(1);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Anti-Inflammatory Meal Plan
        </h1>
        <p className="text-charcoal/60">
          Delicious, healing meals that calm inflammation and support cortisol
          balance. No calorie counting required.
        </p>
      </div>

      <div className="space-y-6">
        {content.meals.map((meal, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-charcoal/10 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0">{meal.icon}</div>
              <div className="flex-1">
                <span className="inline-block text-xs font-medium bg-sage/10 text-sage-dark px-2 py-0.5 rounded-full mb-2">
                  {meal.type}
                </span>
                <h3 className="text-lg font-semibold text-charcoal mb-1">
                  {meal.title}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4">
                  {meal.description}
                </p>

                <div className="bg-cream/80 rounded-xl p-4 mb-3">
                  <h4 className="text-sm font-semibold text-charcoal mb-2">
                    Ingredients:
                  </h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {meal.ingredients.map((ing, j) => (
                      <li
                        key={j}
                        className="text-sm text-charcoal/70 flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-sage rounded-full shrink-0" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {meal.benefit && (
                  <div className="text-sm text-sage-dark bg-sage/5 rounded-lg px-3 py-2">
                    💡 {meal.benefit}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
