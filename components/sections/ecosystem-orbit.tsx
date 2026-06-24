'use client';

import { useState } from 'react';
import {
  Brain,
  Boxes,
  Users,
  Cloud,
  Server,
  ShieldCheck,
  Workflow,
  BarChart3,
  Headset,
  BookOpen,
  Compass,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

type Domain = {
  key: string;
  label: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  outcome: string;
  benefits: string;
};

const DOMAINS: Domain[] = [
  {
    key: 'ai',
    label: 'AI',
    icon: Brain,
    problem: 'Decisions rely on intuition instead of data.',
    solution: 'AI models that predict, recommend, and automate decisions.',
    outcome: 'Faster, evidence-based decisions across the organization.',
    benefits: 'Reduced bias, higher accuracy, compounding intelligence.',
  },
  {
    key: 'erp',
    label: 'ERP',
    icon: Boxes,
    problem: 'Finance, inventory, and operations live in separate systems.',
    solution: 'Unified ERP connecting every business function in real time.',
    outcome: 'A single source of truth for the entire organization.',
    benefits: 'Lower overhead, faster closes, total operational visibility.',
  },
  {
    key: 'crm',
    label: 'CRM',
    icon: Users,
    problem: 'Customer relationships are scattered and inconsistent.',
    solution: 'CRM that unifies sales, service, and marketing on one platform.',
    outcome: 'Every customer interaction informed and contextual.',
    benefits: 'Higher retention, shorter cycles, predictable revenue.',
  },
  {
    key: 'cloud',
    label: 'Cloud',
    icon: Cloud,
    problem: 'Rigid infrastructure cannot scale with demand.',
    solution: 'Elastic cloud architecture that grows and contracts with you.',
    outcome: 'Infrastructure that matches your business in real time.',
    benefits: 'Lower cost, zero waste, infinite headroom.',
  },
  {
    key: 'hosting',
    label: 'Hosting',
    icon: Server,
    problem: 'Unreliable hosting causes downtime and lost revenue.',
    solution: 'VaultHost enterprise hosting with 99.99% guaranteed uptime.',
    outcome: 'Your business is always online, always fast.',
    benefits: 'Trust, revenue continuity, global performance.',
  },
  {
    key: 'security',
    label: 'Cybersecurity',
    icon: ShieldCheck,
    problem: 'Expanding attack surfaces outpace defensive capacity.',
    solution: 'Zero-trust security architecture with continuous monitoring.',
    outcome: 'Threats detected and neutralized before impact.',
    benefits: 'Compliance, resilience, and stakeholder confidence.',
  },
  {
    key: 'automation',
    label: 'Automation',
    icon: Workflow,
    problem: 'Manual, repetitive work drains productivity.',
    solution: 'Workflow automation that eliminates repetitive tasks.',
    outcome: 'People focus on strategy; systems handle the rest.',
    benefits: 'Higher throughput, fewer errors, lower cost.',
  },
  {
    key: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    problem: 'Data exists but insights do not.',
    solution: 'Real-time analytics dashboards that turn data into decisions.',
    outcome: 'Every leader sees the same live picture of the business.',
    benefits: 'Proactive management, faster course correction.',
  },
  {
    key: 'bpo',
    label: 'BPO',
    icon: Headset,
    problem: 'Non-core operations distract from strategic work.',
    solution: 'Business process outsourcing for operational scale.',
    outcome: 'Core team focuses on growth; we handle the rest.',
    benefits: 'Lower cost, expert execution, elastic capacity.',
  },
  {
    key: 'kpo',
    label: 'KPO',
    icon: BookOpen,
    problem: 'Specialized knowledge work is expensive to staff.',
    solution: 'Knowledge process outsourcing for research and analysis.',
    outcome: 'Expert insights without the overhead of hiring.',
    benefits: 'Depth, speed, and on-demand expertise.',
  },
  {
    key: 'consulting',
    label: 'Consulting',
    icon: Compass,
    problem: 'Strategy and execution rarely connect.',
    solution: 'Transformation consulting that bridges vision and delivery.',
    outcome: 'Roadmaps that actually get implemented.',
    benefits: 'Alignment, momentum, measurable progress.',
  },
];

export function EcosystemOrbit() {
  const [active, setActive] = useState<Domain>(DOMAINS[0]);

  const radius = 200;
  const total = DOMAINS.length;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Ecosystem"
          title={
            <>
              One Ecosystem.
              <br />
              <span className="text-gradient-primary">Every Capability.</span>
            </>
          }
          description="ELSxGlobal is not a collection of services. It is an interconnected ecosystem where every domain reinforces the others. Select a node to see how each capability solves a real business problem."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-[520px] mx-auto w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-border/40 animate-spin-slow" />
              <div className="absolute h-72 w-72 rounded-full border border-border/30 animate-spin-slow-reverse" />
              <div className="absolute h-[440px] w-[440px] rounded-full border border-border/20" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full glass-strong glow-primary z-10">
                <div className="text-center">
                  <div className="text-sm font-bold tracking-tight">
                    ELS<span className="text-primary">x</span>Global
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    Ecosystem
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse-glow" />
              </div>
            </div>

            {DOMAINS.map((d, i) => {
              const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = active.key === d.key;
              return (
                <button
                  key={d.key}
                  onClick={() => setActive(d)}
                  className={cn(
                    'absolute top-1/2 left-1/2 flex h-14 w-14 -ml-7 -mt-7 items-center justify-center rounded-full transition-all duration-300 group',
                    isActive
                      ? 'glass-strong glow-primary scale-110 z-20'
                      : 'glass hover:scale-105 hover:border-primary/40 z-10'
                  )}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  aria-label={d.label}
                >
                  <d.icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute -bottom-5 text-[10px] font-medium whitespace-nowrap transition-colors',
                      isActive ? 'text-primary' : 'text-muted-foreground/70'
                    )}
                  >
                    {d.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:pl-8">
            <div
              key={active.key}
              className="glass-strong rounded-2xl p-7 animate-scale-in"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <active.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{active.label}</h3>
                  <p className="text-xs text-muted-foreground">
                    ELSxGlobal {active.label} Capability
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <DetailRow label="Business Problem" value={active.problem} tone="destructive" />
                <DetailRow label="Solution" value={active.solution} tone="primary" />
                <DetailRow label="Expected Outcome" value={active.outcome} tone="accent" />
                <DetailRow label="Enterprise Benefits" value={active.benefits} tone="success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'destructive' | 'primary' | 'accent' | 'success';
}) {
  const toneClass = {
    destructive: 'text-destructive/80',
    primary: 'text-primary',
    accent: 'text-accent',
    success: 'text-chart-5',
  }[tone];

  return (
    <div className="border-l-2 border-border pl-4">
      <p className={cn('text-[11px] font-semibold uppercase tracking-wider mb-1', toneClass)}>
        {label}
      </p>
      <p className="text-sm text-foreground/90 leading-relaxed">{value}</p>
    </div>
  );
}
