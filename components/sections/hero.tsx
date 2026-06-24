'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLead } from '@/components/site/lead-context';
import { NetworkCanvas } from '@/components/site/network-canvas';
import { AuroraBackground } from '@/components/site/aurora-background';

const TRUST_METRICS = [
  { value: '200+', label: 'Enterprises Transformed' },
  { value: '12+', label: 'Countries Served' },
  { value: '99.97%', label: 'Infrastructure Uptime' },
  { value: '₹400Cr+', label: 'Business Value Delivered' },
];

const HERO_WORDS = ['Build', 'a', 'Business', 'That', 'Scales', 'Beyond', 'Limits.'];

export function Hero() {
  const { openLead } = useLead();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060912] via-[#0D1A3A] to-[#0B1020]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <AuroraBackground />
      <NetworkCanvas className="absolute inset-0 h-full w-full opacity-50" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            ENTERPRISE TRANSFORMATION ECOSYSTEM
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.02]">
            {HERO_WORDS.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span
                  className={`inline-block animate-fade-up ${
                    i >= 4 ? 'text-gradient' : ''
                  }`}
                  style={{
                    animationDelay: `${0.2 + i * 0.1}s`,
                    marginRight: i < HERO_WORDS.length - 1 ? '0.25em' : '0',
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.9s' }}
          >
            From AI automation and enterprise software to cloud infrastructure
            and intelligent operations — ELSxGlobal transforms complexity into
            measurable, compounding growth.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up"
            style={{ animationDelay: '1.1s' }}
          >
            <Button
              size="lg"
              onClick={() => openLead('consultation')}
              className="h-12 px-7 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 group glow-primary"
            >
              Book Strategy Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 px-7 text-base border-border/60 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/40"
            >
              <Link href="/services">
                <Play className="mr-2 h-4 w-4" />
                Explore Enterprise Solutions
              </Link>
            </Button>
          </div>

          <div
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up"
            style={{ animationDelay: '1.3s' }}
          >
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="border-l border-border/60 pl-4">
                <p className="text-xl sm:text-2xl font-semibold text-gradient-primary tabular-nums">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
