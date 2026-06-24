'use client';

import { useState } from 'react';
import { useLead, type LeadIntent } from '@/components/site/lead-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const INTENT_COPY: Record<
  LeadIntent,
  { title: string; desc: string; cta: string }
> = {
  consultation: {
    title: 'Book a Strategy Consultation',
    desc: 'Get a tailored roadmap for transforming your operations with AI, cloud, and automation.',
    cta: 'Request Consultation',
  },
  proposal: {
    title: 'Request a Proposal',
    desc: 'Tell us about your initiative and we will deliver a scoped proposal within 48 hours.',
    cta: 'Request Proposal',
  },
  discovery: {
    title: 'Schedule a Discovery Call',
    desc: 'A 30-minute call to map your transformation priorities and identify quick wins.',
    cta: 'Schedule Discovery Call',
  },
  contact: {
    title: 'Get in Touch',
    desc: 'Have a question about our ecosystem? Send us a note and we will respond promptly.',
    cta: 'Send Message',
  },
};

const COMPANY_SIZES = ['1-50', '51-200', '201-1000', '1000+'];
const INDUSTRIES = [
  'Manufacturing',
  'Education',
  'Healthcare',
  'Government',
  'Financial Services',
  'Retail',
  'Real Estate',
  'NGOs',
  'Startups',
  'Other',
];
const CHALLENGES = ['AI & Automation', 'ERP & CRM', 'Cloud Infrastructure', 'Cybersecurity', 'Operations', 'Other'];
const BUDGETS = ['< ₹5L', '₹5-20L', '₹20-50L', '₹50L+', 'Not sure yet'];

export function LeadDialog() {
  const { open, intent, closeLead } = useLead();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = INTENT_COPY[intent];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      full_name: String(formData.get('full_name') || ''),
      work_email: String(formData.get('work_email') || ''),
      company: String(formData.get('company') || '') || null,
      phone: String(formData.get('phone') || '') || null,
      intent,
      message: String(formData.get('message') || '') || null,
      source: 'website',
      metadata: {
        role: String(formData.get('role') || '') || null,
        company_size: String(formData.get('company_size') || '') || null,
        industry: String(formData.get('industry') || '') || null,
        challenge: String(formData.get('challenge') || '') || null,
        budget: String(formData.get('budget') || '') || null,
        source_detail: String(formData.get('source_detail') || '') || null,
      },
    };

    if (!payload.full_name || !payload.work_email) {
      setError('Please provide your name and work email.');
      setSubmitting(false);
      return;
    }

    const { error: insertError } = await supabase
      .from('leads')
      .insert(payload);

    if (insertError) {
      setError('Something went wrong. Please try again or email us directly.');
      setSubmitting(false);
      return;
    }

    setSuccess(true);
    setSubmitting(false);
  }

  function handleOpenChange(next: boolean) {
    if (!next) {
      closeLead();
      setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="glass-strong max-w-lg border-border/60 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent pointer-events-none sticky top-0 z-0" />
        <div className="relative p-6 sm:p-8">
          {success ? (
            <div className="flex flex-col items-center text-center py-8 animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 border border-primary/30 mb-5">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Request Received
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Thank you. A senior transformation advisor will reach out within
                one business day to schedule your session.
              </p>
              <Button
                onClick={() => handleOpenChange(false)}
                className="mt-6"
                variant="outline"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  {copy.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {copy.desc}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="full_name" className="text-xs">
                      Full Name *
                    </Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      required
                      placeholder="Jane Doe"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="role" className="text-xs">
                      Designation / Role
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="CTO, COO..."
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Inc."
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company_size" className="text-xs">
                      Company Size
                    </Label>
                    <SelectField name="company_size" options={COMPANY_SIZES} placeholder="Select size" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="work_email" className="text-xs">
                      Work Email *
                    </Label>
                    <Input
                      id="work_email"
                      name="work_email"
                      type="email"
                      required
                      placeholder="jane@acme.com"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 555 000 0000"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="industry" className="text-xs">
                      Industry
                    </Label>
                    <SelectField name="industry" options={INDUSTRIES} placeholder="Select industry" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="challenge" className="text-xs">
                      Primary Challenge
                    </Label>
                    <SelectField name="challenge" options={CHALLENGES} placeholder="Select challenge" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget" className="text-xs">
                    Budget Range (optional)
                  </Label>
                  <SelectField name="budget" options={BUDGETS} placeholder="Select budget" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs">
                    What are you looking to transform?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your goals, current systems, or challenges..."
                    className="bg-background/50 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:opacity-90 group"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {copy.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-[11px] text-muted-foreground/70 text-center">
                  By submitting, you agree to be contacted by ELSxGlobal. We
                  respect your privacy and never share your data.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SelectField({
  name,
  options,
  placeholder,
}: {
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        name={name}
        defaultValue=""
        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 pr-8 text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background [&>option]:bg-background [&>option]:text-foreground"
      >
        <option value="" disabled className="text-muted-foreground">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
}
