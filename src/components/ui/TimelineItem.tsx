import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ date, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-12 pb-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-0.5 bg-border" />
      )}
      
      {/* Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary-foreground" />
      </div>
      
      {/* Content */}
      <div className="card-orchid p-5 md:p-6">
        <span className="text-sm font-semibold text-primary">{date}</span>
        <h4 className="font-serif text-lg md:text-xl font-semibold text-foreground mt-1 mb-2">
          {title}
        </h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
