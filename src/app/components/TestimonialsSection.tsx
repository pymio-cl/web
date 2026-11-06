'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TestimonialsSectionProps {
  lang: 'es' | 'en';
}

const personas = {
  es: [
    { icon: 'BuildingStorefrontIcon' as const, title: 'Dueño o dueña', desc: 'Registra ventas, mira ingresos y stock crítico, y emite documentos desde un solo panel.' },
    { icon: 'CalculatorIcon' as const, title: 'Contador o contadora', desc: 'Revisa las ventas y los documentos pendientes del negocio con una vista ordenada.' },
    { icon: 'MicrophoneIcon' as const, title: 'Feriantes y comercio local', desc: 'Habla en vez de escribir: dicta la venta y confirma con un toque.' },
  ],
  en: [
    { icon: 'BuildingStorefrontIcon' as const, title: 'Owner', desc: 'Log sales, see income and critical stock, and issue documents from one dashboard.' },
    { icon: 'CalculatorIcon' as const, title: 'Accountant', desc: 'Review the business sales and pending documents in an organized view.' },
    { icon: 'MicrophoneIcon' as const, title: 'Market vendors and local shops', desc: 'Speak instead of typing: dictate the sale and confirm with one tap.' },
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
            {lang === 'es' ? 'Para quién es' : 'Who it is for'}
          </p>
          <h2 className="text-hero-md text-foreground mb-3">
            {lang === 'es' ? 'Hecho para quienes llevan un negocio.' : 'Built for people who run a business.'}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {lang === 'es'
              ? 'La demo incluye dos perfiles de prueba: dueño y contador.'
              : 'The demo includes two test profiles: owner and accountant.'}
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