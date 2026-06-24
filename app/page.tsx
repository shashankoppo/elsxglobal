import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { BusinessComplexity } from '@/components/sections/business-complexity';
import { EcosystemOrbit } from '@/components/sections/ecosystem-orbit';
import { AIEngine } from '@/components/sections/ai-engine';
import { DigitalInfrastructure } from '@/components/sections/digital-infrastructure';
import { CommandCenter } from '@/components/sections/command-center';
import { Industries } from '@/components/sections/industries';
import { BusinessOutcomes } from '@/components/sections/business-outcomes';
import { WhyElsxglobal } from '@/components/sections/why-elsxglobal';
import { FounderVision } from '@/components/sections/founder-vision';
import { SocialProof } from '@/components/sections/social-proof';
import { ConsultationEngine } from '@/components/sections/consultation-engine';
import { ResourceHubTeaser } from '@/components/sections/resource-hub-teaser';
import { FinalCTA } from '@/components/sections/final-cta';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ELSxGlobal',
  description:
    'A Business Transformation Ecosystem helping organizations become faster, smarter, safer, and more scalable.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'EvolucentSphere Pvt. Ltd.',
  },
  founder: {
    '@type': 'Person',
    name: 'Shashank Patel',
    jobTitle: 'Business Transformation Architect',
  },
  url: 'https://elsxglobal.com',
  logo: 'https://elsxglobal.com/logo.png',
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero />
      <TrustBar />
      <BusinessComplexity />
      <EcosystemOrbit />
      <AIEngine />
      <DigitalInfrastructure />
      <CommandCenter />
      <Industries />
      <BusinessOutcomes />
      <WhyElsxglobal />
      <FounderVision />
      <SocialProof />
      <ResourceHubTeaser />
      <ConsultationEngine />
      <FinalCTA />
    </>
  );
}
