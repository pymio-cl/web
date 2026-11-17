'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow: 'Preguntas frecuentes',
    title:   'Respuestas sobre la demo.',
    faqs: [
      {
        q: '¿Pymio está conectado al SII?',
        a: 'Todavía no. La demo prepara borradores con el formato y el IVA correspondientes, pero no se transmiten al SII ni tienen validez tributaria.',
      },
      {
        q: '¿El Asistente de Voz entiende el español chileno?',
        a: 'La app de desarrollo usa Gemini para interpretar comandos en español de Chile y preparar borradores de venta. Necesitas internet y tu propia clave de Google AI Studio. El texto del comando se envía a Google para interpretarlo.',
      },
      {
        q: '¿Puedo ingresar datos reales de mi negocio?',
        a: 'No. La app está en desarrollo y usa un servicio online de prueba para ventas e inventario. No ingreses información real o sensible.',
      },
      {
        q: '¿Funciona sin internet (offline)?',
        a: 'No. La app actual necesita conexión para ventas, inventario y documentos. La sincronización offline segura todavía no está implementada.',
      },
      {
        q: '¿Cuánto cuesta y dónde puedo usarla?',
        a: 'El recorrido web es gratuito. La app de desarrollo aún no está publicada en las tiendas y sus precios futuros no están definidos.',
      },
    ],
  },
  en: {
    eyebrow: 'Frequently asked questions',
    title:   'About the demo.',
    faqs: [
      {
        q: 'Is Pymio connected to the SII?',
        a: 'Not yet. The demo prepares drafts with the applicable format and VAT, but they are not transmitted to the SII and have no tax validity.',
      },
      {
        q: 'Does the Voice Assistant understand Chilean Spanish?',
        a: 'The development app uses Gemini to interpret commands in Chilean Spanish and prepare sales drafts. It requires internet and your own Google AI Studio key. Command text is sent to Google for interpretation.',
      },
      {
        q: 'Can I enter real business data?',
        a: 'No. The app is in development and uses an online test service for sales and inventory. Do not enter real or sensitive information.',
      },
      {
        q: 'Does it work without internet (offline)?',
        a: 'No. The current app needs an internet connection for sales, inventory, and documents. Secure offline synchronization is not implemented yet.',
      },
      {
        q: 'How much does it cost, and where can I use it?',
        a: 'The web tour is free. The development app is not available in app stores, and future pricing has not been decided.',
      },
    ],
  },
};

export default function FAQSection({ lang }: FAQSectionProps) {
  const tx = t[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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

  const toggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0s both' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-foreground">{tx.title}</h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {tx.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="animate-on-scroll opacity-100 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/25 transition-all duration-300"
              style={{ animation: `fadeSlideIn 0.6s ease-out ${0.05 + idx * 0.08}s both` }}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[44px]"
                aria-expanded={openIdx === idx}
              >
                <span className="text-base font-bold text-foreground pr-4 group-hover:text-primary transition-colors leading-snug">
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                  openIdx === idx ? 'bg-primary border-primary rotate-45' : 'group-hover:border-primary/40'
                }`}>
                  <Icon
                    name="PlusIcon"
                    size={16}
                    className={openIdx === idx ? 'text-white' : 'text-muted-foreground group-hover:text-primary'}
                  />
                </div>
              </button>

              <div className={`faq-answer ${openIdx === idx ? 'open' : ''}`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 text-center animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0.5s both' }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            {lang === 'es' ? '¿Te quedó alguna duda?' : 'Still have a question?'}
          </p>
          <a
            href="mailto:hola@pymio.cl"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors text-sm border-b border-primary/30 hover:border-accent pb-0.5"
          >
            <Icon name="EnvelopeIcon" size={16} />
            {lang === 'es' ? 'Escríbenos a hola@pymio.cl' : 'Write to us at hola@pymio.cl'}
          </a>
        </div>
      </div>
    </section>
  );
}