import { PageHero } from '@/components/site/page-hero';
import { CTASection } from '@/components/site/cta-section';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    industry: 'Manufacturing',
    title: 'Predictive maintenance cuts downtime by 73%',
    summary:
      'A mid-sized manufacturer unified 14 production lines into a single intelligent system with AI-driven predictive maintenance.',
    metrics: [
      { label: 'Downtime Reduction', value: '73%', up: true },
      { label: 'Maintenance Cost', value: '-41%', up: true },
      { label: 'Throughput', value: '+28%', up: true },
    ],
    tags: ['AI', 'IoT', 'ERP'],
  },
  {
    industry: 'Healthcare',
    title: 'Connected care platform serves 2M+ patients',
    summary:
      'A regional healthcare network unified fragmented patient records into a single compliant platform with predictive diagnostics.',
    metrics: [
      { label: 'Patient Satisfaction', value: '+34%', up: true },
      { label: 'Diagnostic Speed', value: '2.1x', up: true },
      { label: 'Compliance Gaps', value: '-96%', up: true },
    ],
    tags: ['Cloud', 'Cybersecurity', 'Analytics'],
  },
  {
    industry: 'Financial Services',
    title: 'Fraud detection prevents $12M in losses',
    summary:
      'A fintech deployed AI-driven fraud detection across their transaction pipeline with sub-100ms latency.',
    metrics: [
      { label: 'Fraud Prevented', value: '$12M', up: true },
      { label: 'False Positives', value: '-62%', up: true },
      { label: 'Detection Speed', value: '<100ms', up: true },
    ],
    tags: ['AI', 'Cybersecurity', 'Automation'],
  },
  {
    industry: 'Retail',
    title: 'Omnichannel CRM lifts retention by 45%',
    summary:
      'A multi-brand retailer unified sales, service, and marketing on a single CRM with real-time inventory visibility.',
    metrics: [
      { label: 'Customer Retention', value: '+45%', up: true },
      { label: 'Stockouts', value: '-58%', up: true },
      { label: 'Revenue per Customer', value: '+31%', up: true },
    ],
    tags: ['CRM', 'ERP', 'Analytics'],
  },
  {
    industry: 'Education',
    title: 'AI-driven curricula boost completion by 52%',
    summary:
      'An online education platform deployed personalized learning paths powered by AI and real-time student analytics.',
    metrics: [
      { label: 'Completion Rate', value: '+52%', up: true },
      { label: 'Admin Overhead', value: '-38%', up: true },
      { label: 'Student Engagement', value: '+67%', up: true },
    ],
    tags: ['AI', 'Analytics', 'Automation'],
  },
  {
    industry: 'Startups',
    title: 'Enterprise-grade systems from day one',
    summary:
      'A Series A startup deployed scalable cloud infrastructure and automated operations, enabling 10x growth without re-architecture.',
    metrics: [
      { label: 'Scale', value: '10x', up: true },
      { label: 'Infrastructure Cost', value: '-34%', up: true },
      { label: 'Time to Market', value: '-58%', up: true },
    ],
    tags: ['Cloud', 'Software', 'Automation'],
  },
];

export const metadata = {
  title: 'Case Studies',
  description:
    'Real transformations, real outcomes. See how ELSxGlobal has helped organizations across industries.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Real transformations.
            <br />
            <span className="text-gradient">Real outcomes.</span>
          </>
        }
        description="We measure success in business results. These are the measurable improvements our ecosystem has delivered across industries."
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <div
                key={c.title}
                className="group glass rounded-2xl p-7 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {c.summary}
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-background/40 border border-border/40 p-3"
                    >
                      <p className="text-lg font-semibold text-gradient-primary tabular-nums">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-muted-foreground bg-muted/40 px-2 py-1 rounded-md border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
