'use client';

import { Star, ArrowUpRight, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

const CASE_CARDS = [
  {
    industry: 'Manufacturing',
    challenge: 'Manual production tracking, zero predictive capability',
    solution: 'AI + ERP integration across 4 plants',
    result: '43% reduction in downtime. ₹2.1Cr saved in Year 1.',
    metric: '43%',
    metricLabel: 'Downtime Reduction',
  },
  {
    industry: 'Financial Services',
    challenge: 'Compliance burden, manual fraud detection',
    solution: 'RegTech automation + AI fraud detection',
    result: '₹12M fraud prevented. 62% fewer false positives.',
    metric: '₹12M',
    metricLabel: 'Fraud Prevented',
  },
  {
    industry: 'Healthcare',
    challenge: 'Fragmented patient records, diagnostic delays',
    solution: 'Unified records platform + predictive diagnostics',
    result: '2.1x faster diagnostics. 34% higher patient satisfaction.',
    metric: '2.1x',
    metricLabel: 'Faster Diagnostics',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'ELSxGlobal didn\u2019t just implement software — they rethought how our entire operation runs. 18 months later, we\u2019re a different company.',
    name: 'Rajesh Kumar',
    title: 'COO',
    company: 'Manufacturing Enterprise',
  },
  {
    quote:
      'The difference between ELSxGlobal and every other partner we\u2019ve worked with is that they think like business leaders, not just technologists.',
    name: 'Priya Sharma',
    title: 'CTO',
    company: 'Financial Services Firm',
  },
];

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

export function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Social Proof"
          title={
            <>
              Organizations That Chose
              <br />
              <span className="text-gradient-primary">Transformation Over the Status Quo.</span>
            </>
          }
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {CASE_CARDS.map((c) => (
            <div
              key={c.industry}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {c.industry}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>
              <div className="mb-4">
                <p className="text-3xl font-semibold text-gradient-primary">
                  {c.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {c.metricLabel}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-destructive/70 font-medium">Challenge: </span>
                  {c.challenge}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">Solution: </span>
                  {c.solution}
                </p>
                <p className="text-foreground font-medium pt-1">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass-strong rounded-2xl p-7 relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/15" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base text-foreground/90 leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative overflow-hidden">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/70 mb-6">
            Trusted across industries that demand scale and precision
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12 w-max">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="text-lg font-semibold text-muted-foreground/40 whitespace-nowrap tracking-tight hover:text-foreground/70 transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
