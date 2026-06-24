'use client';

import { useEffect, useState } from 'react';
import { Server, Shield, Activity, Globe, Cpu, HardDrive } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

const TIERS = [
  {
    name: 'Shared Hosting',
    desc: 'Reliable entry-level hosting for small sites and apps.',
    specs: ['99.9% uptime', 'Free SSL', 'Daily backups', 'cPanel'],
    badge: 'Starter',
  },
  {
    name: 'Business Hosting',
    desc: 'Optimized performance for growing businesses.',
    specs: ['99.95% uptime', 'NVMe storage', 'Free CDN', 'Priority support'],
    badge: 'Growth',
  },
  {
    name: 'VPS Hosting',
    desc: 'Dedicated resources with full root control.',
    specs: ['99.99% uptime', 'Dedicated CPU', 'SSD storage', 'Snapshots'],
    badge: 'Pro',
  },
  {
    name: 'Enterprise Cloud',
    desc: 'Scalable, redundant infrastructure for mission-critical workloads.',
    specs: ['99.995% uptime', 'Auto-scaling', 'Multi-region', '24/7 NOC'],
    badge: 'Enterprise',
  },
];

const NODES = [
  { label: 'US-East', x: 20, y: 35, status: 'online' },
  { label: 'EU-West', x: 48, y: 25, status: 'online' },
  { label: 'AP-South', x: 72, y: 45, status: 'online' },
  { label: 'AP-East', x: 85, y: 65, status: 'online' },
  { label: 'US-West', x: 15, y: 70, status: 'online' },
  { label: 'ME-Central', x: 55, y: 55, status: 'online' },
];

export function DigitalInfrastructure() {
  const [uptime, setUptime] = useState(99.99);
  const [latency, setLatency] = useState(12);
  const [requests, setRequests] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(99.98 + Math.random() * 0.02);
      setLatency(8 + Math.floor(Math.random() * 12));
      setRequests(800 + Math.floor(Math.random() * 200));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VaultHost Infrastructure"
          title={
            <>
              Your Business Never Sleeps.
              <br />
              <span className="text-gradient-primary">Neither Should Your Infrastructure.</span>
            </>
          }
          description="VaultHost is the ELSxGlobal infrastructure layer — enterprise-grade hosting engineered for uptime, security, and performance at global scale."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Global Network Topology</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-chart-5 animate-pulse" />
                <span className="text-xs text-muted-foreground">All systems operational</span>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl bg-background/60 border border-border/40 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="link-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {NODES.map((n, i) =>
                  NODES.slice(i + 1).map((m, j) => (
                    <line
                      key={`${i}-${j}`}
                      x1={`${n.x}%`}
                      y1={`${n.y}%`}
                      x2={`${m.x}%`}
                      y2={`${m.y}%`}
                      stroke="url(#link-grad)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      className="animate-data-flow"
                      style={{ animationDelay: `${(i + j) * 0.3}s` }}
                    />
                  ))
                )}
              </svg>
              {NODES.map((n) => (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]" />
                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-primary animate-ping opacity-40" />
                  </div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground whitespace-nowrap">
                    {n.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Metric icon={Activity} label="Uptime" value={`${uptime.toFixed(3)}%`} />
              <Metric icon={Cpu} label="Avg Latency" value={`${latency}ms`} />
              <Metric icon={Server} label="Requests/sec" value={requests.toLocaleString()} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className="glass rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">{t.name}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {t.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.specs.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] text-muted-foreground bg-muted/40 px-2 py-1 rounded-md border border-border/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Server;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-background/40 border border-border/40 p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-lg font-semibold text-foreground tabular-nums">{value}</p>
    </div>
  );
}
