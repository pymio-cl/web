'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow:  'Precios',
    title:    'El recorrido web es gratuito.',
    subtitle: 'Pymio sigue en desarrollo. Los planes y precios futuros aún no están definidos.',
    plan: {
      badge:    'Versión demo',
      name:     'Recorrido de Pymio',
      price:    '$0',
      period:   'sin costo',
      cta:      'Ver el recorrido',
      features: [
        'Borradores de boletas, facturas y notas de débito y crédito',
        'Resumen de ventas con cifras ilustrativas',
        'Productos y alertas de stock de ejemplo',
        'Recorrido de Voz Pymio; la app requiere internet y Gemini',
        'Ejemplos de RUT e IVA del 19%',
        'Recorrido disponible en español e inglés',
        'No ingreses datos reales o sensibles',
      ],
    },
    trustBadge: 'Demo web sin costo · No requiere registro',
  },
  en: {
    eyebrow:  'Pricing',
    title:    'The web tour is free.',
    subtitle: 'Pymio is still in development. Future plans and pricing have not been decided.',
    plan: {
      badge:    'Demo version',
      name:     'Pymio tour',
      price:    '$0',
      period:   'no cost',
      cta:      'Take the tour',
      features: [
        'Sample receipt, invoice, debit-note, and credit-note drafts',
        'Sales summary with illustrative figures',
        'Sample products and stock alerts',
        'Voz Pymio tour; the app requires internet and Gemini',
        'RUT and 19% VAT examples',
        'Tour available in Spanish and English',
        'Do not enter real or sensitive data',
      ],
    },
    trustBadge: 'Free web tour · No registration required',
  },
};

export default function PricingSection({ lang }: PricingSectionProps) {
  const tx = t[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate'); });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 md:py-28 bg-muted relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-accent opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0s both' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-foreground mb-4">{tx.title}</h2>
          <p className="text-pretty text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>
        </div>

        {/* Single pricing card */}
        <div
          className="animate-on-scroll opacity-100 bg-card rounded-3xl border-2 border-primary/20 shadow-[0_30px_80px_rgba(0,71,171,0.12)] overflow-hidden relative"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0.15s both' }}
        >
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left: price + CTA */}
              <div className="flex flex-col">
                <span                 className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground self-start mb-5 border border-primary/20">
                  {tx.plan.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-foreground mb-2 tracking-tight">{tx.plan.name}</h3>

                <div className="flex items-end gap-2 my-5">
                  <span className="text-6xl font-extrabold tracking-tighter text-foreground leading-none">{tx.plan.price}</span>
                  <span className="text-sm text-muted-foreground font-medium mb-1.5 leading-tight">{tx.plan.period}</span>
                </div>

                <a
                  href="#hero"
                  className="flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 py-4 rounded-2xl text-base font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 mt-auto"
                >
                  <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
                  {tx.plan.cta}
                </a>

                <p className="text-xs text-muted-foreground mt-3 font-medium">{tx.trustBadge}</p>
              </div>

              {/* Right: features */}
              <div className="grid grid-cols-1 gap-3">
                {tx.plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckIcon" size={12} className="text-accent-foreground" variant="solid" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/85">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="px-8 md:px-12 py-5 bg-secondary/50 border-t border-border flex items-center gap-3">
            <Icon name="HeartIcon" size={16} className="text-primary flex-shrink-0" variant="solid" />
            <p className="text-pretty text-sm text-muted-foreground font-medium">
              {lang === 'es' ? 'Pymio sigue en desarrollo. La app no está lista para gestionar datos reales de un negocio.' : 'Pymio is still in development. The app is not ready to manage real business data.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}