'use client';

import React, { useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FeaturesSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    eyebrow: 'Todo lo que necesitas',
    title:   'Cuatro herramientas. Una sola app.',
    subtitle:'Menos papeleo y menos confusión. Pymio ordena lo importante de tu negocio.',
    features: [
      {
        icon:    'DocumentTextIcon' as const,
        color:   'primary',
        tag:     'Documentos tributarios',
        title:   'Facturación SII',
        benefit: 'Crea boletas, facturas, notas de débito y notas de crédito con varios productos y IVA calculado.',
        detail:  'Valida el RUT y calcula el 19% de IVA. En la demo el documento se guarda localmente; el envío real al SII aún no está activo.',
        big:     true,
      },
      {
        icon:    'ChartBarIcon' as const,
        color:   'accent',
        tag:     'Panel claro',
        title:   'Control de Ventas',
        benefit: 'Ve cuánto vendiste por día, semana, mes o año, con gráfico y ventas pendientes.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'ArchiveBoxIcon' as const,
        color:   'accent',
        tag:     'Alertas de stock',
        title:   'Inventario',
        benefit: 'Busca, filtra y edita productos, y mira qué stock está en nivel crítico.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'MicrophoneIcon' as const,
        color:   'primary',
        tag:     'Voz + IA',
        title:   'Asistente de Voz Pymio',
        benefit: 'Registra ventas hablando: "Registra una venta de $10.000 en efectivo". Tú confirmas antes de guardar.',
        detail:  'Reconoce español chileno (es-CL) y usa Gemini con tu propia clave de Google AI Studio.',
        big:     true,
      },
    ],
  },
  en: {
    eyebrow: 'Everything you need',
    title:   'Four tools. One app.',
    subtitle:'Less paperwork, less confusion. Pymio organizes what matters in your business.',
    features: [
      {
        icon:    'DocumentTextIcon' as const,
        color:   'primary',
        tag:     'Tax documents',
        title:   'SII Invoicing',
        benefit: 'Create receipts, invoices, debit and credit notes with multiple products and VAT calculated.',
        detail:  'Validates the RUT and calculates 19% VAT. In the demo the document is saved locally; real SII submission is not active yet.',
        big:     true,
      },
      {
        icon:    'ChartBarIcon' as const,
        color:   'accent',
        tag:     'Clear dashboard',
        title:   'Sales Tracking',
        benefit: 'See what you sold by day, week, month or year, with a chart and pending sales.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'ArchiveBoxIcon' as const,
        color:   'accent',
        tag:     'Stock alerts',
        title:   'Inventory',
        benefit: 'Search, filter and edit products, and see which stock is at a critical level.',
        detail:  '',
        big:     false,
      },
      {
        icon:    'MicrophoneIcon' as const,
        color:   'primary',
        tag:     'Voice + AI',
        title:   'Pymio Voice Assistant',
        benefit: 'Log sales by speaking: "Register a $10,000 cash sale". You confirm before saving.',
        detail:  'Understands Chilean Spanish (es-CL) and uses Gemini with your own Google AI Studio key.',
        big:     true,
      },
    ],
  },
};

const colorMap = {
  primary: {
    bg:      'bg-secondary',
    icon:    'text-primary',
    tag:     'bg-primary/10 text-primary',
    border:  'border-primary/20',
    hover:   'hover:border-primary/50 hover:shadow-primary/10',
  },
  accent: {
    bg:      'bg-accent/10',
    icon:    'text-accent',
    tag:     'bg-accent/10 text-accent',
    border:  'border-accent/20',
    hover:   'hover:border-accent/40 hover:shadow-accent/10',
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">{tx.eyebrow}</p>
          <h2 className="text-hero-md text-foreground mb-4">{tx.title}</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>
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
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {lang === 'es' ? 'Conectado al SII' : 'Connected to SII'}
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
              bg-primary p-7 flex flex-col gap-5
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
                      {lang === 'es' ? 'Escuchando...' : 'Listening...'}
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