'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    tagline:  'Tu compañero de negocios inteligente.',
    features: 'Funciones',
    pricing:  'Precios',
    faq:      'Preguntas',
    about:    'Nosotros',
    privacy:  'Privacidad',
    terms:    'Términos',
    contact:  'Contacto',
    copyright:'© 2026 Pymio. Hecho con ♥ en Chile.',
  },
  en: {
    tagline:  'The intelligent business companion.',
    features: 'Features',
    pricing:  'Pricing',
    faq:      'FAQ',
    about:    'About',
    privacy:  'Privacy',
    terms:    'Terms',
    contact:  'Contact',
    copyright:'© 2026 Pymio. Made with ♥ in Chile.',
  },
};

export default function Footer({ lang }: FooterProps) {
  const tx = t[lang];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={32} />
              <span className="font-extrabold text-lg tracking-tight text-foreground">Pymio</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{tx.tagline}</p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { name: 'instagram', icon: 'ShareIcon' as const },
                { name: 'facebook',  icon: 'GlobeAltIcon' as const },
                { name: 'tiktok',    icon: 'PlayCircleIcon' as const },
              ].map((s) => (
                <a
                  key={s.name}
                  href={`https://${s.name}.com/pymio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                  aria-label={s.name}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
              <a
                href="mailto:hola@pymio.cl"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Email"
              >
                <Icon name="EnvelopeIcon" size={16} />
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: '#features',     label: tx.features },
              { href: '#pricing',      label: tx.pricing },
              { href: '#faq',          label: tx.faq },
              { href: '/about',        label: tx.about },
              { href: '/privacy',      label: tx.privacy },
              { href: '/terms',        label: tx.terms },
              { href: '/contact',      label: tx.contact },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-medium">{tx.copyright}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="MapPinIcon" size={13} />
            <span>pymio.cl · Santiago, Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}