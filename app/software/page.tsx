import { SolutionPage } from '@/components/site/solution-page';
import { Code2, Layers, GitBranch, Smartphone, Database, Cpu, Cloud, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Software Development',
  description:
    'Custom enterprise software engineered for scale, reliability, and longevity.',
};

export default function SoftwarePage() {
  return (
    <SolutionPage
      eyebrow="Software Development"
      title={
        <>
          Built for
          <br />
          <span className="text-gradient">your business.</span>
        </>
      }
      description="Custom enterprise software engineered for scale, reliability, and longevity — from web platforms to mobile apps to complex API ecosystems."
      stats={[
        { value: '2.7x', label: 'Faster Delivery' },
        { value: '99.9%', label: 'Reliability' },
        { value: '100%', label: 'Custom Built' },
        { value: '∞', label: 'Scalability' },
      ]}
      features={[
        {
          icon: Code2,
          title: 'Custom Applications',
          desc: 'Software built precisely for your workflows, not forced into off-the-shelf constraints.',
        },
        {
          icon: Layers,
          title: 'API Platforms',
          desc: 'API ecosystems that connect your systems and enable partner integrations.',
        },
        {
          icon: Smartphone,
          title: 'Mobile Apps',
          desc: 'Native and cross-platform mobile apps for iOS and Android.',
        },
        {
          icon: Database,
          title: 'Data Platforms',
          desc: 'Data engineering, pipelines, and warehouses that turn data into an asset.',
        },
        {
          icon: Cpu,
          title: 'Microservices',
          desc: 'Decomposed architectures that scale independently and deploy safely.',
        },
        {
          icon: Cloud,
          title: 'Cloud-Native',
          desc: 'Containerized, serverless, and cloud-native from the first line of code.',
        },
        {
          icon: GitBranch,
          title: 'DevOps & CI/CD',
          desc: 'Automated pipelines that ship safely and frequently.',
        },
        {
          icon: Wrench,
          title: 'Legacy Modernization',
          desc: 'We modernize legacy systems without disrupting your business.',
        },
      ]}
      process={[
        { step: 'Discover', title: 'Requirements', desc: 'We deeply understand your needs, users, and constraints.' },
        { step: 'Design', title: 'Architecture', desc: 'We design scalable, secure, maintainable architecture.' },
        { step: 'Build', title: 'Development', desc: 'We build iteratively with continuous delivery.' },
        { step: 'Scale', title: 'Launch & Scale', desc: 'We launch, monitor, and scale with your growth.' },
      ]}
    />
  );
}
