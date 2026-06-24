'use client';

import {
  Factory,
  GraduationCap,
  HeartPulse,
  HandHeart,
  Landmark,
  Banknote,
  ShoppingBag,
  Building2,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/site/section-heading';

type Industry = {
  icon: LucideIcon;
  name: string;
  outcome: string;
  detail: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: Factory,
    name: 'Manufacturing',
    outcome: 'From production lines to intelligent factories.',
    detail: 'Predictive maintenance, supply chain visibility, and automated quality control.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    outcome: 'Personalized learning at institutional scale.',
    detail: 'AI-driven curricula, student analytics, and automated administration.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    outcome: 'Better outcomes through connected care.',
    detail: 'Unified records, predictive diagnostics, and compliant data infrastructure.',
  },
  {
    icon: HandHeart,
    name: 'NGOs',
    outcome: 'Greater impact with leaner operations.',
    detail: 'Transparent reporting, donor intelligence, and program automation.',
  },
  {
    icon: Landmark,
    name: 'Government',
    outcome: 'Public services that work at scale.',
    detail: 'Secure digital infrastructure, citizen portals, and data-driven policy.',
  },
  {
    icon: Banknote,
    name: 'Financial Services',
    outcome: 'Compliance and speed without compromise.',
    detail: 'Risk analytics, fraud detection, and regulated cloud infrastructure.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    outcome: 'Inventory that thinks. Customers that stay.',
    detail: 'Demand forecasting, omnichannel CRM, and real-time pricing intelligence.',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    outcome: 'Portfolios managed with total visibility.',
    detail: 'Property analytics, tenant CRM, and automated operations.',
  },
  {
    icon: Rocket,
    name: 'Startups',
    outcome: 'Enterprise-grade systems from day one.',
    detail: 'Scalable infrastructure, rapid deployment, and growth-ready architecture.',
  },
];

export function Industries() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Transformation"
          title={
            <>
              Built for the Realities of{' '}
              <span className="text-gradient-primary">Your Industry</span>
            </>
          }
          description="We do not deliver generic solutions. Every transformation is grounded in the specific outcomes your industry demands."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.name}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                  <ind.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1.5">{ind.name}</h3>
                <p className="text-sm font-medium text-foreground/90 mb-2">
                  {ind.outcome}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ind.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
