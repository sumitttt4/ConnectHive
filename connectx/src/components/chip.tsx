import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600",
        className
      )}
    >
      {children}
    </span>
  );
}
