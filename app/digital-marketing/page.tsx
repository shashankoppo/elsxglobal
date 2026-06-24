import { SolutionPage } from '@/components/site/solution-page';
import { Megaphone, Search, PenTool, BarChart3, Mail, Target, Share2, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing',
  description:
    'Data-driven marketing that compounds — from SEO to full-funnel automation.',
};

export default function DigitalMarketingPage() {
  return (
    <SolutionPage
      eyebrow="Digital Marketing"
      title={
        <>
          Growth,
          <br />
          <span className="text-gradient">engineered.</span>
        </>
      }
      description="Data-driven marketing that compounds — from SEO and paid media to content and full-funnel automation, all measured by revenue, not vanity metrics."
      stats={[
        { value: '3.2x', label: 'Lead Growth' },
        { value: '48%', label: 'Lower CAC' },
        { value: '24/7', label: 'Automation' },
        { value: '100%', label: 'Attribution' },
      ]}
      features={[
        {
          icon: Search,
          title: 'SEO',
          desc: 'Technical, content, and authority SEO that compounds organic traffic over time.',
        },
        {
          icon: Target,
          title: 'Paid Media',
          desc: 'Performance marketing across search, social, and display with full-funnel attribution.',
        },
        {
          icon: PenTool,
          title: 'Content',
          desc: 'Content engines that build authority, trust, and pipeline simultaneously.',
        },
        {
          icon: Mail,
          title: 'Marketing Automation',
          desc: 'Lifecycle email and nurture sequences that convert and retain on autopilot.',
        },
        {
          icon: Share2,
          title: 'Social Media',
          desc: 'Social strategy and execution that builds community and drives engagement.',
        },
        {
          icon: BarChart3,
          title: 'Analytics & Attribution',
          desc: 'Full-funnel attribution that connects every channel to revenue.',
        },
        {
          icon: Megaphone,
          title: 'Brand Strategy',
          desc: 'Positioning, messaging, and brand systems that command premium attention.',
        },
        {
          icon: TrendingUp,
          title: 'Growth Experiments',
          desc: 'Continuous experimentation that finds and scales what works.',
        },
      ]}
      process={[
        { step: 'Audit', title: 'Marketing Audit', desc: 'We audit your channels, funnel, and attribution.' },
        { step: 'Strategy', title: 'Growth Plan', desc: 'We design a data-driven growth strategy.' },
        { step: 'Execute', title: 'Campaign Launch', desc: 'We launch integrated campaigns across channels.' },
        { step: 'Optimize', title: 'Continuous Optimization', desc: 'We measure, experiment, and scale what works.' },
      ]}
    />
  );
}
