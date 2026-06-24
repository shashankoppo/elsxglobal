'use client';

const LOGOS = [
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'Education',
  'Government',
  'Retail',
  'Real Estate',
  'Startups',
];

export function TrustBar() {
  return (
    <section className="relative py-12 border-y border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/70 mb-6">
          Trusted across industries that demand scale and precision
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 w-max">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="text-lg font-semibold text-muted-foreground/50 whitespace-nowrap tracking-tight"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
