'use client';

import { useEffect, useRef, useState } from 'react';
import { Compass, Cpu, Settings, Workflow, BarChart3, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

const PILLARS = [
  { icon: Compass, label: 'Strategy', desc: 'A clear roadmap grounded in your business reality.' },
  { icon: Cpu, label: 'Technology', desc: 'Enterprise systems engineered for scale.' },
  { icon: Settings, label: 'Operations', desc: 'Processes redesigned for speed and reliability.' },
  { icon: Workflow, label: 'Automation', desc: 'Friction eliminated across every workflow.' },
  { icon: BarChart3, label: 'Analytics', desc: 'Decisions driven by live intelligence.' },
];

export function WhyElsxglobal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why ELSxGlobal"
          title={
            <>
              Technology Alone Doesn&apos;t Create Growth.
              <br />
              <span className="text-gradient-primary">Execution Does.</span>
            </>
          }
          description="Most transformations fail not because the technology is wrong, but because strategy, operations, and execution are disconnected. Our framework unifies them."
        />

        <div ref={ref} className="mt-16">
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {PILLARS.map((p, i) => (
              <div key={p.label} className="flex items-center gap-3 lg:gap-3 flex-1">
                <div
                  className={cn(
                    'glass rounded-2xl p-6 flex-1 transition-all duration-500',
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-1">{p.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                {i < PILLARS.length - 1 && (
                  <div className="hidden lg:flex items-center text-primary/60">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="text-primary/60 text-2xl">=</div>
            <div
              className={cn(
                'mt-4 glass-strong rounded-2xl px-10 py-6 text-center transition-all duration-700',
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              )}
              style={{ transitionDelay: '700ms' }}
            >
              <p className="text-xs uppercase tracking-widest text-primary mb-1">
                The Result
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-gradient">
                Sustainable Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
