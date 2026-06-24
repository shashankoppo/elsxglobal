'use client';

import { Quote, Target, Lightbulb, TrendingUp, Handshake, Rocket, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLead } from '@/components/site/lead-context';

const FOCUS = [
  { icon: Target, label: 'Long-Term Value Creation' },
  { icon: Lightbulb, label: 'Digital Transformation' },
  { icon: Rocket, label: 'Innovation' },
  { icon: TrendingUp, label: 'Enterprise Growth' },
  { icon: Handshake, label: 'Strategic Partnerships' },
];

const CREDENTIALS = [
  '12+ Years Enterprise Experience',
  '200+ Transformations Led',
  'Multi-Industry Expertise',
  'AI & ERP Certified',
];

export function FounderVision() {
  const { openLead } = useLead();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 rounded-3xl blur-2xl" />
              <div className="relative glass-strong rounded-3xl p-8">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-chart-3/20 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-semibold text-gradient mb-2">
                      SP
                    </div>
                    <p className="text-sm text-muted-foreground">Shashank Patel</p>
                  </div>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold">Shashank Patel</h3>
                  <p className="text-sm text-primary font-medium">
                    Business Transformation Architect
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Founder, ELSxGlobal
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {CREDENTIALS.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] text-muted-foreground bg-muted/40 border border-border/40 px-2 py-1 rounded-md flex items-center gap-1"
                    >
                      <Award className="h-3 w-3 text-primary/70" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              BUILT BY A BUILDER
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15]">
              Shashank Patel
              <span className="block text-gradient-primary text-2xl sm:text-3xl mt-1">
                Business Transformation Architect
              </span>
            </h2>

            <div className="relative mt-6">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
              <blockquote className="relative pl-6 text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/40">
                &ldquo;Most organizations are sitting on untapped potential —
                buried under legacy systems, manual processes, and disconnected
                data. ELSxGlobal exists to unlock that potential
                systematically, and turn it into compounding, measurable
                enterprise value.&rdquo;
              </blockquote>
            </div>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Shashank brings a rare combination of enterprise technology depth
              and business strategy clarity. His philosophy: technology
              investments must be justified by business outcomes — not the other
              way around. Under his leadership, ELSxGlobal has helped
              organizations across manufacturing, education, healthcare, and
              financial services build intelligent, scalable operational
              foundations.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {FOCUS.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover:border-primary/40 transition-colors"
                >
                  <f.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => openLead('discovery')}
              className="mt-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 group"
            >
              Schedule a Founder-Level Discovery Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
