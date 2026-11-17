'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FeaturesSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow: 'Funciones en desarrollo',
    title:   'Conoce lo que muestra Pymio.',
    subtitle:'La demo usa datos de ejemplo. La app sigue en desarrollo y no está lista para gestionar un negocio real.',
    features: [
      {
        icon:    'DocumentTextIcon' as const,
        color:   'primary',
        tag:     'Documentos de ejemplo',
        title:   'Boletas y facturas',
        benefit: 'Explora borradores de boletas, facturas, notas de débito y notas de crédito con varios productos.',
        detail:  'La app valida el formato del RUT y calcula el IVA del 19%. Los borradores no se envían al SII ni tienen validez tributaria.',
        big:     true,
      },
      {
        icon:    'ChartBarIcon' as const,
        color:   'accent',
        tag:     'Resumen de ejemplo',
        title:   'Ventas',
        benefit: 'Explora un resumen por día, semana, mes o año y revisa ventas pendientes de ejemplo.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'ArchiveBoxIcon' as const,
        color:   'accent',
        tag:     'Inventario de ejemplo',
        title:   'Inventario',
        benefit: 'Revisa productos de prueba y ejemplos de alertas de stock.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'MicrophoneIcon' as const,
        color:   'primary',
        tag:     'Voz con Gemini',
        title:   'Voz Pymio',
        benefit: 'La app de desarrollo interpreta comandos de venta y prepara un borrador para que lo revises.',
        detail:  'Usa Gemini, requiere internet y tu propia clave de Google AI Studio. No admite comandos de gastos.',
        big:     true,
      },
    ],
  },
  en: {
    eyebrow: 'Features in development',
    title:   'Explore the Pymio demo.',
    subtitle:'The demo uses sample data. The app is still in development and is not ready to manage a real business.',
    features: [
      {
        icon:    'DocumentTextIcon' as const,
        color:   'primary',
        tag:     'Sample documents',
        title:   'Receipts and invoices',
        benefit: 'Explore receipt, invoice, debit-note, and credit-note drafts with multiple products.',
        detail:  'The app checks RUT format and calculates 19% VAT. Drafts are not sent to the SII and have no tax validity.',
        big:     true,
      },
      {
        icon:    'ChartBarIcon' as const,
        color:   'accent',
        tag:     'Sample summary',
        title:   'Sales',
        benefit: 'Explore a day, week, month, or year summary and review sample pending sales.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'ArchiveBoxIcon' as const,
        color:   'accent',
        tag:     'Sample inventory',
        title:   'Inventory',
        benefit: 'Review sample products and example low-stock alerts.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'MicrophoneIcon' as const,
        color:   'primary',
        tag:     'Voice with Gemini',
        title:   'Voz Pymio',
        benefit: 'The development app interprets sales commands and prepares a draft for you to review.',
        detail:  'It uses Gemini, requires internet and your own Google AI Studio key, and does not support expense commands.',
        big:     true,
      },
    ],
  },
};

const colorMap = {
  primary: {
    bg:      'bg-secondary',
    icon:    'text-primary-foreground',
    tag:     'bg-primary/10 text-primary-foreground',
    border:  'border-primary/20',
    hover:   'hover:border-primary/50 hover:shadow-primary/10',
  },
  accent: {
    bg:      'bg-accent/20',
    icon:    'text-accent-foreground',
    tag:     'bg-accent/20 text-accent-foreground',
    border:  'border-accent/35',
    hover:   'hover:border-accent/60 hover:shadow-accent/10',
  },
};

export default function FeaturesSection({ lang }: FeaturesSectionProps) {
  const tx = t[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Bento grid map:
  // Row 1: [col-1: SII cs-1 rs-2] [col-2: Ventas cs-1 rs-1] [col-3: AsistenteVoz cs-1 rs-2]
  // Row 2: [col-1: (SII cont.)] [col-2: Inventario cs-1 rs-1] [col-3: (AsistenteVoz cont.)]
  const [sii, ventas, inventario, voz] = tx.features;

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14 animate-on-scroll opacity-100"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0s both' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-foreground mb-4">{tx.title}</h2>
          <p className="text-pretty text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>
        </div>

        {/* Bento Grid — 3 columns on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Card 1: SII — col-span-1 row-span-2 (big) */}
          {/* lg: col-1, rows 1-2 */}
          <div
            className={`
              animate-on-scroll opacity-100
              lg:row-span-2
              rounded-2xl border ${colorMap[sii.color as keyof typeof colorMap].border}
              bg-card p-7 flex flex-col gap-5
              hover:shadow-xl ${colorMap[sii.color as keyof typeof colorMap].hover}
              transition-all duration-300 group relative overflow-hidden
            `}
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.1s both' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 blob-primary opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${colorMap[sii.color as keyof typeof colorMap].tag}`}>
                {sii.tag}
              </span>
              <div className={`w-14 h-14 rounded-2xl ${colorMap[sii.color as keyof typeof colorMap].bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={sii.icon} size={28} className={colorMap[sii.color as keyof typeof colorMap].icon} />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3 tracking-tight">{sii.title}</h3>
              <p className="text-base font-semibold text-foreground/90 mb-3 leading-snug">{sii.benefit}</p>
              {sii.detail && (
                <p className="text-sm text-muted-foreground leading-relaxed">{sii.detail}</p>
              )}
            </div>
            {/* Visual decoration */}
            <div className="mt-auto relative z-10">
              <div className="bg-secondary rounded-xl p-4 border border-primary/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    {lang === 'es' ? 'Ejemplo · no enviado al SII' : 'Sample · not sent to SII'}
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/30 rounded-sm transition-all duration-500 group-hover:bg-primary/60"
                      style={{ height: `${h * 0.5}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ventas — col-span-1 row-span-1 */}
          {/* lg: col-2, row 1 */}
          <div
            className={`
              animate-on-scroll opacity-100
              rounded-2xl border ${colorMap[ventas.color as keyof typeof colorMap].border}
              bg-card p-6 flex flex-col gap-4
              hover:shadow-xl ${colorMap[ventas.color as keyof typeof colorMap].hover}
              transition-all duration-300 group
            `}
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.2s both' }}
          >
            <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start ${colorMap[ventas.color as keyof typeof colorMap].tag}`}>
              {ventas.tag}
            </span>
            <div className={`w-12 h-12 rounded-2xl ${colorMap[ventas.color as keyof typeof colorMap].bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={ventas.icon} size={24} className={colorMap[ventas.color as keyof typeof colorMap].icon} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">{ventas.title}</h3>
              <p className="text-sm font-semibold text-muted-foreground leading-snug">{ventas.benefit}</p>
            </div>
            {/* Mini chart */}
            <div className="mt-auto flex items-end gap-1 h-10">
              {[30, 55, 40, 70, 50, 85, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent/25 group-hover:bg-accent/50 transition-all duration-300"
                  style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Card 3: Voice Assistant — col-span-1 row-span-2 (big) */}
          {/* lg: col-3, rows 1-2 */}
          <div
            className={`
              animate-on-scroll opacity-100
              lg:row-span-2 md:col-span-2 lg:col-span-1
              rounded-2xl border ${colorMap[voz.color as keyof typeof colorMap].border}
              bg-foreground p-7 flex flex-col gap-5
              hover:shadow-xl hover:shadow-primary/20
              transition-all duration-300 group relative overflow-hidden
            `}
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.15s both' }}
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 bg-accent/20 text-accent">
                {voz.tag}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon name={voz.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">{voz.title}</h3>
              <p className="text-base font-semibold text-white/90 mb-3 leading-snug">{voz.benefit}</p>
              {voz.detail && (
                <p className="text-sm text-white/70 leading-relaxed">{voz.detail}</p>
              )}
            </div>
            {/* Voice wave animation */}
            <div className="mt-auto relative z-10">
              <div className="bg-white/10 rounded-xl p-4 border border-white/15">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
                    <Icon name="MicrophoneIcon" size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/60 text-[10px] uppercase tracking-wider">
                      {lang === 'es' ? 'Ejemplo de voz' : 'Voice example'}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                {/* Wave bars */}
                <div className="flex items-center gap-0.5 h-8 justify-center">
                  {[4,8,14,20,14,24,18,12,22,16,8,20,14,10,18].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-accent/60"
                      style={{
                        height: `${h}px`,
                        animation: `pulse-ring ${0.6 + (i % 4) * 0.15}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-white/80 text-xs font-semibold mt-3 italic">
                  {lang === 'es' ? '"Vendí 5 marraquetas a $200 cada una"' : '"Sold 5 bread rolls at $200 each"'}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Inventario — col-span-1 row-span-1 */}
          {/* lg: col-2, row 2 */}
          <div
            className={`
              animate-on-scroll opacity-100
              rounded-2xl border ${colorMap[inventario.color as keyof typeof colorMap].border}
              bg-card p-6 flex flex-col gap-4
              hover:shadow-xl ${colorMap[inventario.color as keyof typeof colorMap].hover}
              transition-all duration-300 group
            `}
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.3s both' }}
          >
            <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full self-start ${colorMap[inventario.color as keyof typeof colorMap].tag}`}>
              {inventario.tag}
            </span>
            <div className={`w-12 h-12 rounded-2xl ${colorMap[inventario.color as keyof typeof colorMap].bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={inventario.icon} size={24} className={colorMap[inventario.color as keyof typeof colorMap].icon} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">{inventario.title}</h3>
              <p className="text-sm font-semibold text-muted-foreground leading-snug">{inventario.benefit}</p>
            </div>
            {/* Stock indicator */}
            <div className="mt-auto space-y-2">
              {[
                { name: lang === 'es' ? 'Marraquetas' : 'Bread rolls', pct: 72 },
                { name: lang === 'es' ? 'Bebidas' : 'Drinks',         pct: 28 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-[11px] font-semibold mb-1">
                    <span className="text-foreground">{item.name}</span>
                    <span className={item.pct < 35 ? 'text-red-500' : 'text-muted-foreground'}>{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${item.pct < 35 ? 'bg-red-400' : 'bg-accent'}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}