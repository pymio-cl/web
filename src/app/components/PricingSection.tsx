'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow:  'Precios',
    title:    'Gratis durante la demo.',
    subtitle: 'Pymio está en etapa de demostración y hoy no tiene costo. Los precios futuros aún no están definidos.',
    plan: {
      badge:    'Versión demo',
      name:     'Demo gratuita',
      price:    '$0',
      period:   'durante la demo',
      cta:      'Probar la demo',
      features: [
        'Documentos: boleta, factura, notas de débito y crédito',
        'Panel con ingresos por día, semana, mes y año',
        'Inventario con alerta de stock crítico',
        'Asistente de voz Pymio (con tu clave de Gemini)',
        'Validación de RUT e IVA 19% automático',
        'App en español e inglés',
        'Datos guardados en tu dispositivo',
        'Sin anuncios',
      ],
    },
    trustBadge: 'Sin tarjeta de crédito · Precios futuros por definir',
  },
  en: {
    eyebrow:  'Pricing',
    title:    'Free during the demo.',
    subtitle: 'Pymio is in demo stage and currently costs nothing. Future pricing has not been decided.',
    plan: {
      badge:    'Demo version',
      name:     'Free demo',
      price:    '$0',
      period:   'during the demo',
      cta:      'Try the demo',
      features: [
        'Documents: receipt, invoice, debit and credit notes',
        'Dashboard with day, week, month and year income',
        'Inventory with critical-stock alerts',
        'Pymio voice assistant (bring your Gemini key)',
        'RUT validation and automatic 19% VAT',
        'App in Spanish and English',
        'Data stored on your device',
        'No ads',
      ],
    },
    trustBadge: 'No credit card · Future pricing to be defined',
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-foreground mb-4">{tx.title}</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>
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
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-secondary text-primary self-start mb-5 border border-primary/20">
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
                      <Icon name="CheckIcon" size={12} className="text-accent" variant="solid" />
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
            <p className="text-sm text-muted-foreground font-medium">
              {lang === 'es' ?'Pymio se financia con partnerships con contadores y servicios financieros — nunca con tus datos ni con publicidad invasiva.' :'Pymio is funded through partnerships with accountants and financial services — never with your data or invasive advertising.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}