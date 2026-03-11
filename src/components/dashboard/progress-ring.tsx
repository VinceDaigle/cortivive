interface ProgressRingProps {
  value: number; // 0-5
  label: string;
  color?: string;
}

export function ProgressRing({
  value,
  label,
  color = "#E8836B",
}: ProgressRingProps) {
  const percentage = (value / 5) * 100;
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-charcoal">{value}</span>
        </div>
      </div>
      <span className="mt-2 text-xs text-charcoal/60 font-medium">{label}</span>
    </div>
  );
}
