'use client';

import { ArrowRight, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLead } from '@/components/site/lead-context';

export function FinalCTA() {
  const { openLead } = useLead();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#060912]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px] animate-aurora" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-chart-3/15 blur-[100px] animate-aurora" style={{ animationDelay: '5s' }} />
      </div>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
          The Gap Between Where You Are
          <br />
          and Where You Could Be
          <br />
          Is a <span className="text-gradient">Strategy Conversation.</span>
        </h2>

        <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join 200+ organizations that chose to build intelligent, scalable,
          future-ready enterprises.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            size="lg"
            onClick={() => openLead('consultation')}
            className="h-14 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 group glow-primary animate-pulse-glow"
          >
            Book Your Strategy Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={() => openLead('proposal')}
              className="h-12 px-6 text-sm border-border/60 bg-card/30 backdrop-blur-sm hover:bg-card/60"
            >
              <FileText className="mr-2 h-4 w-4" />
              Request a Formal Proposal
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 text-sm border-border/60 bg-card/30 backdrop-blur-sm hover:bg-card/60"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Capability Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
