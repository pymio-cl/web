'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TestimonialsSectionProps {
  lang: 'es' | 'en';
}

const personas = {
  es: [
    { icon: 'BuildingStorefrontIcon' as const, title: 'Dueños de negocio', desc: 'La demo muestra ventas, inventario y borradores con datos de ejemplo.' },
    { icon: 'CalculatorIcon' as const, title: 'Contadores', desc: 'Revisa cómo se presentan las ventas y los documentos de prueba.' },
    { icon: 'MicrophoneIcon' as const, title: 'Comercio local', desc: 'Conoce cómo Voz Pymio prepara borradores de venta a partir de un comando.' },
  ],
  en: [
    { icon: 'BuildingStorefrontIcon' as const, title: 'Business owners', desc: 'The tour shows sample sales, inventory, and document drafts.' },
    { icon: 'CalculatorIcon' as const, title: 'Accountants', desc: 'See how sample sales and test documents are presented.' },
    { icon: 'MicrophoneIcon' as const, title: 'Local businesses', desc: 'See how Voz Pymio prepares a sales draft from a command.' },
  ],
};

export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const items = personas[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add('animate');});
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden">
      
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground mb-3">
            {lang === 'es' ? 'Perfiles de ejemplo' : 'Sample profiles'}
          </p>
          <h2 className="text-hero-md text-foreground mb-3">
            {lang === 'es' ? 'Una demo para distintos roles.' : 'A demo for different roles.'}
          </h2>
          <p className="text-pretty text-sm text-muted-foreground max-w-xl mx-auto">
            {lang === 'es'
              ? 'Estos perfiles ilustran usos posibles; no son testimonios de clientes.'
              : 'These profiles illustrate possible uses; they are not customer testimonials.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Icon name={item.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-extrabold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>);

}