'use client';

import { useState } from 'react';
import {
  ShoppingCart,
  Users,
  Package,
  UserCog,
  Wallet,
  Settings,
  FolderKanban,
  TrendingUp,
  TrendingDown,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

const MODULES: { icon: LucideIcon; label: string; value: string; change: string; up: boolean }[] = [
  { icon: ShoppingCart, label: 'Sales', value: '$2.4M', change: '+18.2%', up: true },
  { icon: Users, label: 'CRM', value: '4,829', change: '+12.4%', up: true },
  { icon: Package, label: 'Inventory', value: '98.7%', change: '+2.1%', up: true },
  { icon: UserCog, label: 'HR', value: '342', change: '+4.0%', up: true },
  { icon: Wallet, label: 'Finance', value: '$847K', change: '-3.2%', up: false },
  { icon: Settings, label: 'Operations', value: '99.2%', change: '+1.8%', up: true },
  { icon: FolderKanban, label: 'Projects', value: '24', change: '+6', up: true },
];

const CHART_DATA = [42, 58, 51, 67, 72, 64, 78, 85, 79, 92, 88, 96];

export function CommandCenter() {
  const [active, setActive] = useState('Sales');

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ERP & CRM Command Center"
          title={
            <>
              Complete Visibility Across
              <br />
              <span className="text-gradient-primary">Your Organization.</span>
            </>
          }
          description="One unified command center for sales, operations, finance, HR, and projects — with real-time intelligence on every metric that matters."
        />

        <div className="mt-16 glass-strong rounded-2xl p-4 sm:p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-5 px-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-5/60" />
              </div>
              <span className="ml-3 text-xs text-muted-foreground">elsxglobal.command-center</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-chart-5 animate-pulse" />
              Live
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-3 space-y-2">
              {MODULES.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setActive(m.label)}
                  className={cn(
                    'w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all',
                    active === m.label
                      ? 'bg-primary/15 border border-primary/30'
                      : 'hover:bg-muted/40 border border-transparent'
                  )}
                >
                  <m.icon
                    className={cn(
                      'h-4 w-4',
                      active === m.label ? 'text-primary' : 'text-muted-foreground'
                    )}
                  />
                  <span
                    className={cn(
                      'text-sm font-medium',
                      active === m.label ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {m.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-9 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MODULES.slice(0, 4).map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-background/50 border border-border/40 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <m.icon className="h-4 w-4 text-muted-foreground" />
                      <span
                        className={cn(
                          'flex items-center gap-0.5 text-xs font-medium',
                          m.up ? 'text-chart-5' : 'text-destructive'
                        )}
                      >
                        {m.up ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {m.change}
                      </span>
                    </div>
                    <p className="text-xl font-semibold tabular-nums">{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-background/50 border border-border/40 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold">Revenue Trend</p>
                    <p className="text-xs text-muted-foreground">Last 12 months</p>
                  </div>
                  <div className="flex gap-1.5">
                    {['1M', '6M', '1Y'].map((p, i) => (
                      <span
                        key={p}
                        className={cn(
                          'text-[10px] px-2 py-1 rounded-md',
                          i === 2
                            ? 'bg-primary/15 text-primary'
                            : 'text-muted-foreground bg-muted/40'
                        )}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-1.5 h-32">
                  {CHART_DATA.map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary/80 transition-all duration-500 hover:from-primary/50 hover:to-accent"
                      style={{ height: `${v}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-background/50 border border-border/40 p-4">
                  <p className="text-xs text-muted-foreground mb-3">Top Performers</p>
                  <div className="space-y-2.5">
                    {[
                      { name: 'Enterprise Sales', pct: 92 },
                      { name: 'Customer Success', pct: 78 },
                      { name: 'Operations', pct: 64 },
                    ].map((r) => (
                      <div key={r.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{r.name}</span>
                          <span className="text-foreground font-medium">{r.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            style={{ width: `${r.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-background/50 border border-border/40 p-4">
                  <p className="text-xs text-muted-foreground mb-3">System Health</p>
                  <div className="space-y-2.5">
                    {[
                      { name: 'API Gateway', status: 'Operational', tone: 'ok' },
                      { name: 'Database Cluster', status: 'Operational', tone: 'ok' },
                      { name: 'AI Services', status: 'Operational', tone: 'ok' },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{r.name}</span>
                        <span className="flex items-center gap-1.5 text-chart-5">
                          <span className="h-1.5 w-1.5 rounded-full bg-chart-5" />
                          {r.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
