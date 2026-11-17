'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HowItWorksSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow: 'Qué verás en la demo',
    title:   'Recorre Pymio en tres pasos.',
    subtitle:'Explora ejemplos de documentos, ventas, inventario y registro por voz. Las cifras son ficticias y los documentos no se envían al SII.',
    steps: [
      {
        number: '01',
        icon:   'DocumentTextIcon' as const,
        title:  'Revisa documentos de ejemplo',
        desc:   'Mira cómo se prepara un borrador de boleta o factura. No se transmite al SII ni tiene validez tributaria.',
        cta:    'Borradores de demostración',
        color:  'primary',
      },
      {
        number: '02',
        icon:   'PencilSquareIcon' as const,
        title:  'Explora ventas e inventario',
        desc:   'Revisa un resumen de ventas y alertas de stock con datos de ejemplo, no con información de tu negocio.',
        cta:    'Cifras ilustrativas',
        color:  'accent',
      },
      {
        number: '03',
        icon:   'MicrophoneIcon' as const,
        title:  'Conoce Voz Pymio',
        desc:   'La app de desarrollo interpreta comandos con Gemini y prepara borradores de venta. Requiere internet y tu propia clave de Gemini.',
        cta:    'Requiere internet y Gemini',
        color:  'primary',
      },
    ],
    cta: 'Ver el recorrido',
  },
  en: {
    eyebrow: 'What you will see',
    title:   'Explore Pymio in three steps.',
    subtitle:'See sample documents, sales, inventory, and voice entry. Figures are illustrative, and documents are not sent to the SII.',
    steps: [
      {
        number: '01',
        icon:   'DocumentTextIcon' as const,
        title:  'Review sample documents',
        desc:   'See how a receipt or invoice draft is prepared. It is not sent to the SII and has no tax validity.',
        cta:    'Demonstration drafts',
        color:  'primary',
      },
      {
        number: '02',
        icon:   'PencilSquareIcon' as const,
        title:  'Explore sales and inventory',
        desc:   'Review a sales summary and stock alerts using sample data, not information from your business.',
        cta:    'Illustrative figures',
        color:  'accent',
      },
      {
        number: '03',
        icon:   'MicrophoneIcon' as const,
        title:  'Meet Voz Pymio',
        desc:   'The development app uses Gemini to interpret commands and prepare sales drafts. It requires internet and your own Gemini key.',
        cta:    'Internet and Gemini required',
        color:  'primary',
      },
    ],
    cta: 'Take the tour',
  },
};

export default function HowItWorksSection({ lang }: HowItWorksSectionProps) {
  const tx = t[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate'); });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 md:py-28 bg-foreground relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg-dark opacity-100 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blob-accent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16 animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0s both' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-white mb-4">{tx.title}</h2>
          <p className="text-pretty text-base text-white/60 max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {tx.steps.map((step, idx) => (
            <div
              key={idx}
              className="animate-on-scroll opacity-100 relative group"
              style={{ animation: `fadeSlideIn 0.7s ease-out ${0.1 + idx * 0.12}s both` }}
            >
              {/* Connector line (between cards) */}
              {idx < tx.steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-px border-t border-dashed border-white/15 z-0 -translate-x-4" />
              )}

              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-accent/40 hover:bg-white/8 transition-all duration-300 h-full flex flex-col">
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-5xl font-extrabold text-white/10 tracking-tighter leading-none select-none">
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    step.color === 'accent' ? 'bg-accent/20 text-accent' : 'bg-primary/30 text-white'
                  }`}>
                    <Icon name={step.icon} size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">{step.desc}</p>

                {/* CTA tag */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className={`w-1.5 h-1.5 rounded-full ${step.color === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    step.color === 'accent' ? 'text-accent' : 'text-primary/80'
                  }`}>
                    {step.cta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0.45s both' }}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Icon name="UserGroupIcon" size={20} variant="solid" />
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}