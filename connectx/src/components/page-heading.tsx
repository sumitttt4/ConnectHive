interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-semibold text-slate-900">{title}</h1>
      {subtitle && (
        <p className="text-sm text-slate-700">{subtitle}</p>
      )}
    </div>
  );
}
