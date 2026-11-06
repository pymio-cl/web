'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';

const t = {
  es: {
    // Hero
    badge: 'Nuestra Historia',
    heroTitle: 'Construido para el emprendedor chileno.',
    heroSubtitle:
      'Pymio nació en una feria de Santiago. No en una oficina de Silicon Valley.',

    // Mission
    missionLabel: 'Nuestra Misión',
    missionTitle: 'Tecnología que habla tu idioma',
    missionBody:
      'Millones de pequeños negocios en Chile operan con cuadernos, calculadoras y memoria. No porque les falte inteligencia — sino porque las herramientas disponibles fueron diseñadas para contadores y grandes empresas, no para la señora Rosa de la feria o el Rodrigo de la tienda de barrio. Pymio existe para cambiar eso: una app gratuita, en español chileno, que cualquier persona puede usar desde el primer día.',

    // Why
    whyLabel: '¿Por qué Pymio?',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Hecho en Chile, para Chile',
        body: 'Integración nativa con el SII, terminología local y soporte en español chileno — no en español genérico.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Gratis de verdad',
        body: 'Sin prueba de 14 días. Sin tarjeta de crédito. Sin letra chica. Gratis para siempre para negocios pequeños.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'Sin conocimientos técnicos',
        body: 'Diseñado para personas que nunca han usado software de gestión. Si puedes hablar, puedes usar Pymio.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Tus datos, seguros',
        body: 'Almacenamiento encriptado, sin venta de datos a terceros. Tu negocio es tuyo.',
      },
    ],

    // Story
    storyLabel: 'La Historia',
    storyTitle: 'De una feria a una app',
    storyBlocks: [
      {
        year: '2023',
        heading: 'El problema real',
        text: 'Nuestro fundador, Matías, visitaba ferias y tiendas de barrio en Santiago. Vio el mismo patrón una y otra vez: dueños talentosos perdiendo horas en papeles, sin saber cuánto ganaban al día. Las apps existentes eran caras, complicadas o simplemente no hablaban chileno.',
      },
      {
        year: '2024',
        heading: 'El primer prototipo',
        text: 'Con un equipo de tres personas — un desarrollador, una diseñadora UX y una contadora — construimos el primer prototipo y lo pusimos en manos de 20 emprendedores reales. Sus comentarios fueron brutalmente honestos y completamente invaluables.',
      },
      {
        year: '2025',
        heading: 'Pymio nace',
        text: 'Después de más de 300 entrevistas con dueños de negocios, lanzamos Pymio. El asistente de voz fue la función más pedida: "Quiero registrar una venta sin dejar de atender al cliente." Hoy, miles de negocios chilenos la usan cada día.',
      },
    ],

    // Team
    teamLabel: 'El Equipo',
    teamTitle: 'Personas reales, detrás de una app real',
    teamSubtitle:
      'Somos un equipo pequeño con una convicción grande: la tecnología debe servir a las personas, no al revés.',
    teamMembers: [
      {
        name: 'Matías Fuentes',
        role: 'Fundador & CEO',
        bio: 'Ex-emprendedor de feria. Vendió completos antes de escribir código.',
        initials: 'MF',
        color: 'bg-primary',
      },
      {
        name: 'Valentina Rojas',
        role: 'Diseño UX',
        bio: 'Diseña para su abuela primero. Si ella lo entiende, todos lo entienden.',
        initials: 'VR',
        color: 'bg-accent',
      },
      {
        name: 'Ignacio Soto',
        role: 'Ingeniería',
        bio: 'Obsesionado con que la app funcione sin internet en zonas con mala señal.',
        initials: 'IS',
        color: 'bg-primary/80',
      },
      {
        name: 'Camila Herrera',
        role: 'Contabilidad & SII',
        bio: 'Contadora que habla en humano, no en jerga tributaria.',
        initials: 'CH',
        color: 'bg-accent/80',
      },
    ],

    // Values
    valuesLabel: 'Lo que nos guía',
    values: [
      { icon: 'HeartIcon', label: 'Empatía primero' },
      { icon: 'LightBulbIcon', label: 'Simplicidad radical' },
      { icon: 'HandRaisedIcon', label: 'Honestidad total' }
    ],

    // CTA
    ctaTitle: '¿Listo para ordenar tu negocio?',
    ctaBody: 'Únete a miles de emprendedores chilenos que ya controlan sus ventas con Pymio.',
    ctaBtn: 'Descargar Gratis',
    ctaSecondary: 'Volver al inicio',
  },
  en: {
    badge: 'Our Story',
    heroTitle: 'Built for the Chilean entrepreneur.',
    heroSubtitle:
      'Pymio was born at a Santiago street market. Not in a Silicon Valley office.',

    missionLabel: 'Our Mission',
    missionTitle: 'Technology that speaks your language',
    missionBody:
      'Millions of small businesses in Chile operate with notebooks, calculators, and memory. Not because they lack intelligence — but because the available tools were designed for accountants and large corporations, not for Rosa at the market stall or Rodrigo at the corner shop. Pymio exists to change that: a free app, in Chilean Spanish, that anyone can use from day one.',

    whyLabel: 'Why Pymio?',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Made in Chile, for Chile',
        body: 'Native SII integration, local terminology, and support in Chilean Spanish — not generic Spanish.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Truly free',
        body: 'No 14-day trial. No credit card. No fine print. Free forever for small businesses.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'No technical knowledge needed',
        body: 'Designed for people who have never used management software. If you can speak, you can use Pymio.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Your data, secure',
        body: 'Encrypted storage, no data sold to third parties. Your business is yours.',
      },
    ],

    storyLabel: 'The Story',
    storyTitle: 'From a market stall to an app',
    storyBlocks: [
      {
        year: '2023',
        heading: 'The real problem',
        text: 'Our founder, Matías, visited markets and corner shops in Santiago. He saw the same pattern over and over: talented owners losing hours on paperwork, not knowing how much they earned each day. Existing apps were expensive, complicated, or simply didn\'t speak Chilean.',
      },
      {
        year: '2024',
        heading: 'The first prototype',
        text: 'With a team of three — a developer, a UX designer, and an accountant — we built the first prototype and put it in the hands of 20 real entrepreneurs. Their feedback was brutally honest and completely invaluable.',
      },
      {
        year: '2025',
        heading: 'Pymio launches',
        text: 'After more than 300 interviews with business owners, we launched Pymio. The voice assistant was the most requested feature: "I want to log a sale without stopping to serve the customer." Today, thousands of Chilean businesses use it every day.',
      },
    ],

    teamLabel: 'The Team',
    teamTitle: 'Real people behind a real app',
    teamSubtitle:
      'We are a small team with a big conviction: technology should serve people, not the other way around.',
    teamMembers: [
      {
        name: 'Matías Fuentes',
        role: 'Founder & CEO',
        bio: 'Former street market entrepreneur. Sold hot dogs before writing code.',
        initials: 'MF',
        color: 'bg-primary',
      },
      {
        name: 'Valentina Rojas',
        role: 'UX Design',
        bio: 'Designs for her grandmother first. If she gets it, everyone gets it.',
        initials: 'VR',
        color: 'bg-accent',
      },
      {
        name: 'Ignacio Soto',
        role: 'Engineering',
        bio: 'Obsessed with making the app work offline in areas with poor signal.',
        initials: 'IS',
        color: 'bg-primary/80',
      },
      {
        name: 'Camila Herrera',
        role: 'Accounting & SII',
        bio: 'An accountant who speaks in plain language, not tax jargon.',
        initials: 'CH',
        color: 'bg-accent/80',
      },
    ],

    valuesLabel: 'What guides us',
    values: [
      { icon: 'HeartIcon', label: 'Empathy first' },
      { icon: 'LightBulbIcon', label: 'Radical simplicity' },
      { icon: 'HandRaisedIcon', label: 'Total honesty' },
      { icon: 'UserGroupIcon', label: 'Community focus' },
    ],

    ctaTitle: 'Ready to take control of your business?',
    ctaBody: 'Join thousands of Chilean entrepreneurs already managing their sales with Pymio.',
    ctaBtn: 'Download Free',
    ctaSecondary: 'Back to home',
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const tx = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onLangChange={setLang} />

      <main className="pt-24">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Background blobs */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <AppLogo size={16} />
              {tx.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 tracking-tight">
              {tx.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              {tx.heroSubtitle}
            </p>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left: text */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                  {tx.missionLabel}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                  {tx.missionTitle}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {tx.missionBody}
                </p>
              </div>
              {/* Right: visual stat block */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '300+', label: lang === 'es' ? 'Entrevistas con dueños' : 'Owner interviews' },
                  { value: '2026', label: lang === 'es' ? 'Año de lanzamiento' : 'Launch year' },
                  { value: '100%', label: lang === 'es' ? 'Gratuito para siempre' : 'Free forever' },
                  { value: 'CL', label: lang === 'es' ? 'Hecho en Chile' : 'Made in Chile' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-1 hover:border-primary/40 transition-colors duration-300"
                  >
                    <span className="text-3xl font-extrabold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground font-semibold leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Pymio ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                {tx.whyLabel}
              </span>
            </div>
            {/* Asymmetric bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Large card */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-primary-foreground flex flex-col justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Icon name={tx.whyCards[0].icon as any} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold mb-2">{tx.whyCards[0].title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{tx.whyCards[0].body}</p>
                </div>
              </div>
              {/* Small card */}
              <div className="bg-accent/10 border border-accent/20 rounded-3xl p-7 flex flex-col justify-between min-h-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Icon name={tx.whyCards[1].icon as any} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{tx.whyCards[1].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tx.whyCards[1].body}</p>
                </div>
              </div>
              {/* Small card */}
              <div className="bg-muted/60 border border-border rounded-3xl p-7 flex flex-col justify-between min-h-[200px]">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={tx.whyCards[2].icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{tx.whyCards[2].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tx.whyCards[2].body}</p>
                </div>
              </div>
              {/* Large card */}
              <div className="md:col-span-2 bg-background border border-border rounded-3xl p-7 flex flex-col justify-between min-h-[200px] hover:border-primary/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                  <Icon name={tx.whyCards[3].icon as any} size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{tx.whyCards[3].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tx.whyCards[3].body}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story Timeline ── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                {tx.storyLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                {tx.storyTitle}
              </h2>
            </div>

            {/* Horizontal scroll cards on mobile, grid on desktop */}
            <div className="grid md:grid-cols-3 gap-6">
              {tx.storyBlocks.map((block, i) => (
                <div
                  key={block.year}
                  className="relative bg-background border border-border rounded-3xl p-7 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Year badge */}
                  <span className="inline-block bg-primary/10 text-primary text-xs font-extrabold tracking-widest px-3 py-1 rounded-full w-fit">
                    {block.year}
                  </span>
                  {/* Step indicator */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-extrabold flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-extrabold text-foreground text-base">{block.heading}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                {tx.teamLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                {tx.teamTitle}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base">{tx.teamSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tx.teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-background border border-border rounded-3xl p-6 flex flex-col items-center text-center gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-extrabold text-foreground text-base">{member.name}</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mt-0.5">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values strip ── */}
        <section className="py-10 bg-primary">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <p className="text-center text-primary-foreground/70 text-xs font-bold uppercase tracking-widest mb-8">
              {tx.valuesLabel}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tx.values.map((v) => (
                <div key={v.label} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Icon name={v.icon as any} size={22} className="text-white" />
                  </div>
                  <span className="text-primary-foreground font-bold text-sm">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              {tx.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-base mb-10">{tx.ctaBody}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon name="ArrowDownTrayIcon" size={18} variant="solid" />
                {tx.ctaBtn}
              </a>
              <a
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold text-sm transition-colors duration-200"
              >
                <Icon name="ArrowLeftIcon" size={16} />
                {tx.ctaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
