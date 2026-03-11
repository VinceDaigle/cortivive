import { Card } from "../ui/card";

interface ContentCardProps {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  children?: React.ReactNode;
}

export function ContentCard({
  title,
  description,
  icon,
  tag,
  children,
}: ContentCardProps) {
  return (
    <Card hover>
      <div className="flex items-start gap-4">
        <div className="text-3xl shrink-0">{icon}</div>
        <div className="flex-1">
          {tag && (
            <span className="inline-block text-xs font-medium bg-sage/10 text-sage-dark px-2 py-0.5 rounded-full mb-2">
              {tag}
            </span>
          )}
          <h3 className="text-lg font-semibold text-charcoal mb-1">{title}</h3>
          <p className="text-charcoal/60 text-sm leading-relaxed">
            {description}
          </p>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </Card>
  );
}
