'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import DemoModal from './DemoModal';

interface HeroSectionProps {
  lang: 'es' | 'en';
}

const t = {
  es: {
    badge: 'Demo disponible · Para negocios chilenos',
    headline1: 'Tu negocio,',
    headline2: 'bajo control.',
    sub: 'Emite documentos tributarios, controla tus ventas e inventario y registra ventas con tu voz — todo en una app Flutter pensada para pymes chilenas.',
    cta1: 'Probar la demo',
    cta2: 'Ver cómo funciona',
    stats: [
    { value: '4', label: 'Tipos de documento' },
    { value: '19%', label: 'IVA calculado solo' },
    { value: 'ES · EN', label: 'App bilingüe' }],

    storeApple: 'Próximamente',
    storeGoogle: 'Próximamente',
    trust: 'Versión de demostración · Los datos quedan en tu dispositivo'
  },
  en: {
    badge: 'Demo available · For Chilean businesses',
    headline1: 'Your business,',
    headline2: 'in control.',
    sub: 'Create tax documents, track sales and inventory, and log sales with your voice — one Flutter app built for Chilean small businesses.',
    cta1: 'Try the demo',
    cta2: 'See how it works',
    stats: [
    { value: '4', label: 'Document types' },
    { value: '19%', label: 'VAT auto-calculated' },
    { value: 'ES · EN', label: 'Bilingual app' }],

    storeApple: 'Coming soon',
    storeGoogle: 'Coming soon',
    trust: 'Demo version · Your data stays on your device'
  }
};

const statImages = [
'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80'];


export default function HeroSection({ lang }: HeroSectionProps) {
  const tx = t[lang];
  const [activeStatIdx, setActiveStatIdx] = useState(0);
  const [imgSrc, setImgSrc] = useState(statImages[0]);
  const [imgVisible, setImgVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setParallaxY(window.scrollY * 0.18);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStatClick = (idx: number) => {
    if (idx === activeStatIdx) return;
    setImgVisible(false);
    setTimeout(() => {
      setActiveStatIdx(idx);
      setImgSrc(statImages[idx]);
      setImgVisible(true);
    }, 350);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] blob-primary animate-morph pointer-events-none"
        style={{ transform: `translateY(${parallaxY * 0.4}px)` }} />
      
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] blob-accent animate-morph pointer-events-none"
        style={{ animationDelay: '3s', transform: `translateY(${-parallaxY * 0.2}px)` }} />
      
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Beam border bottom */}
      <div className="beam-border-h" />

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-28 pb-16 items-center">

        {/* ── LEFT: Headline + CTAs ── */}
        <div
          className="lg:col-span-5 flex flex-col justify-center z-20"
          style={{ animation: 'fadeSlideIn 0.8s ease-out 0.1s both' }}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 self-start border border-primary/15 shadow-[0_10px_25px_rgba(124,207,232,0.18)]">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {tx.badge}
          </div>

          <h1 className="text-hero-xl text-foreground mb-2">
            {tx.headline1}
          </h1>
          <h1 className="text-hero-xl mb-6" style={{
            background: 'linear-gradient(135deg, #63b9d6 0%, #f6bfd1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {tx.headline2}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md font-medium">
            {tx.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <button
              type="button"
              id="download"
              onClick={() => setDemoOpen(true)}
              className="soft-button-primary px-7 py-4 text-base"
            >
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              {tx.cta1}
            </button>
            <a
              href="#how-it-works"
              className="soft-button-secondary px-7 py-4 text-base"
            >
              <Icon name="PlayCircleIcon" size={20} />
              {tx.cta2}
            </a>
          </div>

          {/* Trust line */}
          <p className="text-xs text-muted-foreground font-medium">{tx.trust}</p>

          {/* Store badges */}
          <div className="flex items-center gap-3 mt-5">
            {[
            { icon: 'DevicePhoneMobileIcon' as const, label: tx.storeApple, sub: 'iOS' },
            { icon: 'DevicePhoneMobileIcon' as const, label: tx.storeGoogle, sub: 'Android' }].
            map((store) =>
            <a
              key={store.sub}
              href="#features"
              className="flex items-center gap-2.5 bg-white/80 text-foreground px-4 py-2.5 rounded-xl border border-border shadow-[0_10px_25px_rgba(31,47,58,0.05)] hover:bg-primary hover:text-primary-foreground transition-all duration-200 group">
              
                <Icon name={store.icon} size={18} className="opacity-80" />
                <div>
                  <div className="text-[9px] opacity-60 uppercase tracking-wider leading-none">{store.sub}</div>
                  <div className="text-xs font-bold leading-tight">{store.label}</div>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* ── CENTER: Phone mockup ── */}
        <div
          className="lg:col-span-4 flex items-center justify-center relative py-10 lg:py-0"
          style={{ animation: 'fadeSlideIn 1s ease-out 0.25s both' }}>
          
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border border-primary/10 animate-pulse-ring" />
            <div className="w-80 h-80 rounded-full border border-accent/8 animate-pulse-ring absolute" style={{ animationDelay: '0.8s' }} />
          </div>

          {/* Phone container — oval shape */}
          <div className="relative z-10 w-56 md:w-64 aspect-[9/19] rounded-[3rem] overflow-hidden phone-shadow border-4 border-white/80 animate-float-phone">
            <AppImage
              src={imgSrc}
              alt="Pymio app mockup showing sales dashboard with Chilean business data"
              fill
              className={`object-cover transition-opacity duration-300 ${imgVisible ? 'opacity-100' : 'opacity-0'}`}
              priority />
            
            {/* App UI overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider opacity-80">Ventas Hoy</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div className="text-white font-extrabold text-lg leading-none">$284.500</div>
                <div className="text-white/70 text-[10px] mt-0.5">+12% vs ayer</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Interactive stats sidebar ── */}
        <div
          className="lg:col-span-3 flex flex-col relative z-20 lg:pl-6"
          style={{ animation: 'fadeSlideIn 0.8s ease-out 0.4s both' }}>
          
          {/* Vertical beam border */}
          <div className="beam-border-v hidden lg:block" />

          <div className="flex flex-row lg:flex-col gap-4 lg:gap-0 justify-around lg:justify-between h-full lg:pb-8 lg:pt-8">
            {tx.stats.map((stat, idx) =>
            <div
              key={idx}
              className={`stat-item ${activeStatIdx === idx ? 'active' : ''} ${
              idx > 0 ? 'lg:border-t border-border/40 lg:border-dashed lg:pt-8' : ''} flex-1 lg:flex-none text-center lg:text-left`
              }
              onClick={() => handleStatClick(idx)}>
              
                <span className="stat-value block text-3xl md:text-5xl font-extrabold tracking-tighter text-muted-foreground transition-colors leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1.5 font-semibold">
                  {stat.label}
                </span>
              </div>
            )}

            {/* Profile / trust signal */}
            <div className="hidden lg:block lg:border-t border-border/40 border-dashed lg:pt-8">
              <div className="flex -space-x-2 mb-3">
                {[
                { src: "", alt: 'Claudia Mora, dueña de tienda en Providencia, sonriendo' },
                { src: "", alt: 'Roberto Fuentes, emprendedor en Maipú, con polo rojo' },
                { src: "", alt: 'María José Soto, feriante en La Florida, con delantal' }].
                map((av, i) =>
                <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-background relative">
                    <AppImage src={av.src} alt={av.alt} fill className="object-cover" />
                  </div>
                )}
              </div>
              <p className="text-sm text-foreground font-semibold leading-snug max-w-[160px]">
                {lang === 'es' ? 'Negocios reales, resultados reales.' : 'Real businesses, real results.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {lang === 'es' ? 'Descubre más' : 'Discover more'}
          </span>
          <Icon name="ChevronDownIcon" size={20} className="text-muted-foreground animate-bounce" />
        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} lang={lang} />
    </section>);

}