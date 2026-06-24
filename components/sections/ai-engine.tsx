'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Database,
  Brain,
  Workflow,
  Lightbulb,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

const STAGES: { icon: LucideIcon; label: string; desc: string }[] = [
  {
    icon: Database,
    label: 'Business Data',
    desc: 'Every system, transaction, and signal unified into one intelligent layer.',
  },
  {
    icon: Brain,
    label: 'AI Intelligence',
    desc: 'Models that learn your business and surface patterns humans miss.',
  },
  {
    icon: Workflow,
    label: 'Automation',
    desc: 'Repetitive decisions and actions executed without human friction.',
  },
  {
    icon: Lightbulb,
    label: 'Insights',
    desc: 'Real-time intelligence delivered to the people who need it.',
  },
  {
    icon: TrendingUp,
    label: 'Growth',
    desc: 'Compounding improvements across speed, cost, and revenue.',
  },
];

const CAPABILITIES = [
  {
    title: 'Predictive Analytics',
    desc: 'Forecast demand, churn, and risk before they happen.',
  },
  {
    title: 'AI Assistants',
    desc: 'Context-aware copilots embedded in every workflow.',
  },
  {
    title: 'Workflow Automation',
    desc: 'End-to-end orchestration of complex business processes.',
  },
  {
    title: 'Business Intelligence',
    desc: 'Live dashboards that turn raw data into decisions.',
  },
];

export function AIEngine() {
  const [activeStage, setActiveStage] = useState(0);
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

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveStage((s) => (s + 1) % STAGES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Transformation Engine"
          title={
            <>
              From Data to{' '}
              <span className="text-gradient-primary">Intelligent Growth</span>
            </>
          }
          description="The ELSxGlobal AI engine turns raw business data into automated action and measurable growth — a continuous loop that makes your organization smarter every day."
        />

        <div ref={ref} className="mt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
            {STAGES.map((stage, i) => {
              const isActive = activeStage === i;
              const isPast = activeStage > i;
              return (
                <div key={stage.label} className="flex items-center gap-4 lg:gap-2 flex-1">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div
                      className={cn(
                        'relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500',
                        isActive
                          ? 'glass-strong glow-primary scale-110'
                          : isPast
                          ? 'glass border-primary/30'
                          : 'glass opacity-50'
                      )}
                    >
                      <stage.icon
                        className={cn(
                          'h-7 w-7 transition-colors',
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        )}
                      />
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse-glow" />
                      )}
                    </div>
                    <p
                      className={cn(
                        'mt-3 text-sm font-medium transition-colors',
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {stage.label}
                    </p>
                    <p
                      className={cn(
                        'mt-1 text-xs text-muted-foreground max-w-[160px] transition-all duration-500',
                        isActive ? 'opacity-100' : 'opacity-0 h-0 lg:h-auto lg:opacity-60'
                      )}
                    >
                      {stage.desc}
                    </p>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="relative h-px w-8 lg:w-16 bg-border/60 shrink-0 self-start mt-8">
                      <div
                        className={cn(
                          'absolute inset-0 bg-gradient-to-r from-primary to-accent transition-transform duration-700 origin-left',
                          isPast || isActive ? 'scale-x-100' : 'scale-x-0'
                        )}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.title}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <h3 className="text-base font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
