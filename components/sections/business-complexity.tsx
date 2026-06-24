'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Unplug,
  Hand,
  Database,
  ShieldAlert,
  Gauge,
  EyeOff,
  Layers,
  Code,
  Boxes,
  Workflow,
  Brain,
  ShieldCheck,
  Eye,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

const PROBLEMS: { icon: LucideIcon; label: string }[] = [
  { icon: Unplug, label: 'Disconnected Systems' },
  { icon: Hand, label: 'Manual Processes' },
  { icon: Database, label: 'Siloed Data & Reporting' },
  { icon: ShieldAlert, label: 'Compliance Gaps' },
  { icon: Gauge, label: 'Operational Bottlenecks' },
  { icon: ShieldAlert, label: 'Security Vulnerabilities' },
  { icon: EyeOff, label: 'No Unified Visibility' },
  { icon: Code, label: 'Legacy Tech Debt' },
];

const SOLUTIONS: { icon: LucideIcon; label: string }[] = [
  { icon: Boxes, label: 'Unified Enterprise Platform' },
  { icon: Workflow, label: 'Intelligent Automation' },
  { icon: Brain, label: 'Real-Time Business Insight' },
  { icon: ShieldCheck, label: 'Regulatory Compliance' },
  { icon: Gauge, label: 'Optimized Operations' },
  { icon: ShieldCheck, label: 'Zero-Trust Security' },
  { icon: Eye, label: 'Executive-Level Visibility' },
  { icon: Rocket, label: 'Future-Ready Foundation' },
];

export function BusinessComplexity() {
  const [transformed, setTransformed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTransformed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#111827]">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Pattern Interrupt"
          title={
            <>
              Growth Should Not
              <br />
              Create <span className="text-gradient-primary">Chaos.</span>
            </>
          }
          description="Most organizations reach a ceiling — not because they lack ambition, but because their systems, data, and operations can't keep pace."
        />

        <div ref={ref} className="mt-16">
          <div
            className={cn(
              'grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700',
              transformed ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100'
            )}
          >
            {PROBLEMS.map((p, i) => (
              <div
                key={p.label}
                className="glass-panel rounded-xl p-5 text-center border-destructive/20"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p.icon className="h-7 w-7 mx-auto text-destructive/70 mb-3" />
                <p className="text-xs font-medium text-muted-foreground leading-tight">
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700',
              transformed
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8 absolute inset-x-0 top-0 pointer-events-none'
            )}
          >
            {SOLUTIONS.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-xl p-5 text-center border-primary/30 hover:border-primary/50 transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <s.icon className="h-7 w-7 mx-auto text-primary mb-3" />
                <p className="text-xs font-medium text-foreground leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'mt-10 text-center transition-all duration-700',
              transformed ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">ELSxGlobal</span> closes
              the gap between where you are and where you could be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
