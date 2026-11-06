'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTABannerSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    title:    'Tu negocio merece las mejores herramientas.',
    subtitle: 'Prueba la demo de Pymio y mira cómo se vería la gestión de tu pyme en un solo lugar.',
    cta1:     'Probar la demo',
    cta2:     'Cómo funciona',
    note:     'Versión de demostración · Apps iOS y Android próximamente',
  },
  en: {
    title:    'Your business deserves the best tools.',
    subtitle: 'Try the Pymio demo and see how running your small business could look in one place.',
    cta1:     'Try the demo',
    cta2:     'How it works',
    note:     'Demo version · iOS and Android apps coming soon',
  },
};

export default function CTABannerSection({ lang }: CTABannerSectionProps) {
  const tx = t[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate'); });
      },
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(124,207,232,0.18) 0%, rgba(247,199,216,0.16) 50%, rgba(255,255,255,0.8) 100%)'
      }}
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 blob-primary opacity-35 animate-morph pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 blob-accent opacity-30 animate-morph pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute inset-0 grid-bg-light opacity-75 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
        <div
          className="animate-on-scroll opacity-100 rounded-[2rem] bg-white/75 border border-white/80 shadow-[0_30px_80px_rgba(31,47,58,0.08)] p-8 md:p-12 backdrop-blur-md"
          style={{ animation: 'fadeSlideIn 0.8s ease-out 0.1s both' }}
        >
          <h2 className="text-hero-md text-foreground mb-5">{tx.title}</h2>
          <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#hero"
              className="soft-button-primary px-8 py-4 text-base"
            >
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              {tx.cta1}
            </a>
            <a
              href="#how-it-works"
              className="soft-button-secondary px-8 py-4 text-base"
            >
              <Icon name="PlayCircleIcon" size={20} />
              {tx.cta2}
            </a>
          </div>

          <p className="text-xs text-muted-foreground font-medium">{tx.note}</p>
        </div>
      </div>
    </section>
  );
}