import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatCard({ number, label, sublabel, className }: StatCardProps) {
  return (
    <div className={cn(
      "card-orchid p-6 md:p-8 text-center group",
      className
    )}>
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="font-medium text-foreground">{label}</div>
      {sublabel && (
        <div className="text-sm text-muted-foreground mt-1">{sublabel}</div>
      )}
    </div>
  );
}
