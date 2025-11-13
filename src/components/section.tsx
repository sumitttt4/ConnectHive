import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}
