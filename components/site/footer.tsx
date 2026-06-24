import Link from 'next/link';
import { Logo } from './logo';
import { useLead } from './lead-context';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const SOLUTIONS = [
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'ERP & CRM', href: '/erp-crm' },
  { label: 'VaultHost Hosting', href: '/vaulthost' },
  { label: 'Cloud Infrastructure', href: '/cloud' },
  { label: 'Cybersecurity', href: '/cybersecurity' },
  { label: 'Software Development', href: '/software' },
  { label: 'BPO & KPO', href: '/bpo-kpo' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
];

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-[15px] font-semibold tracking-tight">
                ELS<span className="text-primary">x</span>Global
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              A Business Transformation Ecosystem helping organizations become
              faster, smarter, safer, and more scalable.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70">
              A division of EvolucentSphere Pvt. Ltd.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-primary/70 shrink-0" />
                <a
                  href="mailto:hello@elsxglobal.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@elsxglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-primary/70 shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/70 shrink-0" />
                <span>EvolucentSphere Pvt. Ltd., India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} ELSxGlobal, EvolucentSphere Pvt. Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground/70">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
