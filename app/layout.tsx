import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { LeadProvider } from '@/components/site/lead-context';
import { LeadDialog } from '@/components/site/lead-dialog';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { PageLoader } from '@/components/site/page-loader';
import { EnterpriseAssistant } from '@/components/site/enterprise-assistant';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elsxglobal.com'),
  title: {
    default: 'ELSxGlobal — Transforming Businesses Into Intelligent Enterprises',
    template: '%s | ELSxGlobal',
  },
  description:
    'ELSxGlobal helps organizations build scalable digital foundations through AI, ERP & CRM transformation, cloud infrastructure, cybersecurity, and intelligent automation.',
  keywords: [
    'enterprise transformation',
    'AI automation',
    'ERP CRM',
    'cloud infrastructure',
    'cybersecurity',
    'business process outsourcing',
    'digital transformation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elsxglobal.com',
    siteName: 'ELSxGlobal',
    title: 'ELSxGlobal — Transforming Businesses Into Intelligent Enterprises',
    description:
      'Build a business that scales beyond limits. AI automation, enterprise software, cloud infrastructure, and intelligent operations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELSxGlobal — Transforming Businesses Into Intelligent Enterprises',
    description:
      'Build a business that scales beyond limits. AI automation, enterprise software, cloud infrastructure, and intelligent operations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LeadProvider>
          <PageLoader />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <LeadDialog />
          <EnterpriseAssistant />
          <WhatsAppButton />
        </LeadProvider>
      </body>
    </html>
  );
}
