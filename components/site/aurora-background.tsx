import { cn } from '@/lib/utils';

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[120px] animate-aurora"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-chart-3/15 blur-[120px] animate-aurora"
        style={{ animationDelay: '8s' }}
      />
    </div>
  );
}
