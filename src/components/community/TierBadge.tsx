interface TierBadgeProps {
  tier: string | number;
  size?: "sm" | "md" | "lg";
}

export function TierBadge({ tier, size = "md" }: TierBadgeProps) {
  const tierLabel = typeof tier === 'number' ? `Tier ${tier}` : tier;
  const tierColors: Record<string, string> = {
    "Tier 1": "bg-purple-50 text-purple-600 border-purple-200",
    "Tier 2": "bg-blue-50 text-blue-600 border-blue-200",
    "Tier 3": "bg-green-50 text-green-600 border-green-200",
    "Tier 4": "bg-orange-50 text-orange-600 border-orange-200",
    "Tier 5": "bg-slate-50 text-slate-600 border-slate-200"
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  };

  return (
    <span className={`inline-flex rounded-lg border font-semibold ${tierColors[tierLabel] || tierColors["Tier 5"]} ${sizeClasses[size]}`}>
      {tierLabel}
    </span>
  );
}
