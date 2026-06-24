import { PageHero } from '@/components/site/page-hero';
import { CTASection } from '@/components/site/cta-section';
import { ArrowUpRight, Clock } from 'lucide-react';

const POSTS = [
  {
    category: 'AI & Automation',
    title: 'Why most AI initiatives fail — and how to make yours succeed',
    excerpt:
      'The gap between AI ambition and AI outcomes is almost always an execution problem, not a technology problem.',
    readTime: '8 min',
    date: 'Jun 2026',
  },
  {
    category: 'Cloud Infrastructure',
    title: 'The hidden cost of over-provisioned cloud infrastructure',
    excerpt:
      'Most organizations spend 30-40% more on cloud than they need to. Here is how to find and eliminate the waste.',
    readTime: '6 min',
    date: 'Jun 2026',
  },
  {
    category: 'ERP & CRM',
    title: 'Unified systems: the foundation of intelligent enterprises',
    excerpt:
      'Why disconnected systems are the silent killer of organizational speed — and what to do about it.',
    readTime: '7 min',
    date: 'May 2026',
  },
  {
    category: 'Cybersecurity',
    title: 'Zero-trust is not a product. It is an architecture.',
    excerpt:
      'How to think about zero-trust security as a design principle rather than a checkbox.',
    readTime: '5 min',
    date: 'May 2026',
  },
  {
    category: 'Transformation',
    title: 'The execution gap: why strategy without delivery fails',
    excerpt:
      'The most common reason transformations fail is the disconnect between strategy and execution. Here is the fix.',
    readTime: '9 min',
    date: 'Apr 2026',
  },
  {
    category: 'Analytics',
    title: 'From data to decisions: building a real intelligence layer',
    excerpt:
      'Dashboards are not intelligence. Here is how to build a system that actually drives decisions.',
    readTime: '7 min',
    date: 'Apr 2026',
  },
];

export const metadata = {
  title: 'Blog',
  description:
    'Insights on enterprise transformation, AI, cloud, cybersecurity, and building intelligent organizations.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas that move
            <br />
            <span className="text-gradient">enterprises forward.</span>
          </>
        }
        description="Practical perspectives on enterprise transformation, AI, cloud, cybersecurity, and what it takes to build an intelligent organization."
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {p.readTime}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want insights delivered to your inbox?"
        description="Get practical perspectives on enterprise transformation, delivered monthly. No fluff."
      />
    </>
  );
}
