'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Gauge,
  Brain,
  PiggyBank,
  TrendingUp,
  Eye,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const OUTCOMES = [
  { icon: Gauge, label: 'Faster Operations', value: 3.2, suffix: 'x', desc: 'process speed' },
  { icon: Brain, label: 'Better Decision Making', value: 64, suffix: '%', desc: 'faster decisions' },
  { icon: PiggyBank, label: 'Reduced Costs', value: 38, suffix: '%', desc: 'lower operating cost' },
  { icon: TrendingUp, label: 'Increased Productivity', value: 2.7, suffix: 'x', desc: 'output per team' },
  { icon: Eye, label: 'Higher Visibility', value: 100, suffix: '%', desc: 'real-time coverage' },
  { icon: ShieldCheck, label: 'Stronger Security', value: 99.9, suffix: '%', desc: 'threat prevention' },
  { icon: BarChart3, label: 'Business Intelligence', value: 24, suffix: '/7', desc: 'live insights' },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

export function BusinessOutcomes() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Outcomes"
          title={
            <>
              Technology Is Only Valuable
              <br />
              When It <span className="text-gradient-primary">Produces Results.</span>
            </>
          }
          description="We measure success in your business outcomes — not in features shipped. These are the measurable improvements our ecosystem delivers."
        />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUTCOMES.map((o, i) => (
            <OutcomeCard key={o.label} outcome={o} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({
  outcome,
  index,
  visible,
}: {
  outcome: (typeof OUTCOMES)[number];
  index: number;
  visible: boolean;
}) {
  const value = useCountUp(outcome.value, visible);
  const display =
    outcome.value < 10 ? value.toFixed(1) : Math.round(value).toString();

  return (
    <div
      className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
        <outcome.icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold tabular-nums text-gradient-primary">
          {display}
        </span>
        <span className="text-xl font-semibold text-primary">{outcome.suffix}</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{outcome.desc}</p>
      <p className="mt-3 text-sm font-medium text-foreground">{outcome.label}</p>
    </div>
  );
}
