'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';

const t = {
  es: {
    // Hero
    badge: 'Sobre Pymio',
    heroTitle: 'Una app de gestión en desarrollo para pymes chilenas.',
    heroSubtitle:
      'Explora ejemplos de ventas, inventario y documentos tributarios. Pymio sigue en desarrollo: sus cifras son ficticias y sus documentos no se envían al SII.',

    // Mission
    missionLabel: 'Qué estamos creando',
    missionTitle: 'Una forma más clara de revisar la gestión del negocio',
    missionBody:
      'Quienes llevan un negocio suelen combinar ventas, inventario y documentos tributarios. Pymio está en desarrollo para reunir esas tareas en una app con una interfaz en español chileno. El recorrido web muestra ejemplos: los documentos son borradores, no se envían al SII y no tienen validez tributaria.',

    // Why
    whyLabel: 'Qué encontrarás en la demo',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Documentos de ejemplo',
        body: 'La demo muestra borradores con RUT e IVA del 19%. No verifica autorizaciones tributarias ni transmite documentos al SII.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Recorrido sin costo',
        body: 'Puedes explorar el recorrido web sin crear una cuenta. Los planes y precios futuros aún no se han definido.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'Registro por voz',
        body: 'La app usa Gemini para interpretar comandos de venta y preparar borradores. Requiere internet y tu propia clave de Gemini.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Datos de prueba',
        body: 'Las cifras de la demo son ficticias. No uses la app de desarrollo con información real o sensible.',
      },
    ],

    // Story
    storyLabel: 'Desarrollo',
    storyTitle: 'Pymio, paso a paso',
    storyBlocks: [
      {
        year: '2025',
        heading: 'Conocer las tareas del día a día',
        text: 'En conversaciones con emprendedores y comercios chilenos, escuchamos sobre el tiempo que toma combinar ventas, inventario y documentos. Esa experiencia orienta el desarrollo de Pymio.',
      },
      {
        year: '2026',
        heading: 'Desarrollo de la app',
        text: 'Pymio reúne experiencia en comercio, desarrollo de software y contabilidad. La app incluye un prototipo de voz con Gemini; aún está en desarrollo y sus ventas quedan como borradores.',
      },
      {
        year: 'Hoy',
        heading: 'Una demo en evolución',
        text: 'Seguimos trabajando en Pymio. Por ahora, el recorrido web presenta cifras ilustrativas y documentos de prueba; no representa ventas reales ni operaciones con el SII.',
      },
    ],

    // Team
    teamLabel: 'El Equipo',
    teamTitle: 'Personas detrás de Pymio',
    teamSubtitle:
      'El equipo reúne experiencia en comercio, desarrollo de software y contabilidad.',
    teamMembers: [
      {
        name: 'Fabiana Castro Marcano',
        role: 'Fundadora',
        bio: 'Cuenta con más de 10 años de experiencia en puntos de venta y comercio minorista en Chile.',
        initials: 'FC',
        color: 'bg-primary',
      },
      {
        name: 'Felipe Aguilera Millacura',
        role: 'Fundador y desarrollador',
        bio: 'Se enfoca en que las funciones sean claras y fáciles de usar.',
        initials: 'FA',
        color: 'bg-accent',
      },
      {
        name: 'Jonathan Mateluna',
        role: 'Contabilidad',
        bio: 'Ayuda a explicar la normativa tributaria chilena en lenguaje sencillo.',
        initials: 'JM',
        color: 'bg-accent/80',
      },
    ],

    // Values
    valuesLabel: 'Lo que nos guía',
    values: [
      { icon: 'HeartIcon', label: 'Empatía con el oficio' },
      { icon: 'LightBulbIcon', label: 'Simplicidad práctica' },
      { icon: 'HandRaisedIcon', label: 'Comunicación clara' },
      { icon: 'UserGroupIcon', label: 'Cercanía' },
    ],

    // CTA
    ctaTitle: '¿Quieres conocer la demo?',
    ctaBody: 'Recorre ejemplos de documentos, ventas e inventario. No uses datos reales.',
    ctaBtn: 'Ver el recorrido',
    ctaSecondary: 'Volver al inicio',
  },
  en: {
    badge: 'About Pymio',
    heroTitle: 'A business-management app in development for Chilean small businesses.',
    heroSubtitle:
      'Explore sample sales, inventory, and tax documents. Pymio is still in development: figures are fictional, and documents are not sent to the SII.',

    missionLabel: 'What we are building',
    missionTitle: 'A clearer way to review day-to-day business activity',
    missionBody:
      'Running a business often means keeping track of sales, inventory, and tax documents. Pymio is in development to bring these tasks together in an app with a Chilean Spanish interface. The web tour shows examples: documents are drafts, are not sent to the SII, and have no tax validity.',

    whyLabel: 'What the demo includes',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Sample documents',
        body: 'The demo shows drafts with RUT and 19% VAT examples. It does not verify tax authorization or send documents to the SII.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Free web tour',
        body: 'Explore the web tour without creating an account. Future plans and pricing have not been decided.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'Voice entry',
        body: 'The app uses Gemini to interpret sales commands and prepare drafts. It requires internet and your own Gemini key.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Sample data',
        body: 'Figures in the demo are fictional. Do not use the development app with real or sensitive information.',
      },
    ],

    storyLabel: 'Development',
    storyTitle: 'Pymio, step by step',
    storyBlocks: [
      {
        year: '2025',
        heading: 'Learning about day-to-day work',
        text: 'In conversations with Chilean entrepreneurs and local businesses, we heard about the time it takes to keep up with sales, inventory, and documents. That feedback informs Pymio’s development.',
      },
      {
        year: '2026',
        heading: 'Developing the app',
        text: 'Pymio brings together experience in commerce, software development, and accounting. The app includes a Gemini voice prototype; it is still in development and saves sales as drafts.',
      },
      {
        year: 'Today',
        heading: 'A demo in progress',
        text: 'We are continuing to develop Pymio. For now, the web tour shows illustrative figures and sample documents, not real sales or SII operations.',
      },
    ],

    teamLabel: 'The Team',
    teamTitle: 'The people behind Pymio',
    teamSubtitle:
      'The team brings experience in commerce, software development, and accounting.',
    teamMembers: [
      {
        name: 'Fabiana Castro Marcano',
        role: 'Founder',
        bio: 'More than 10 years of experience in point-of-sale systems and retail in Chile.',
        initials: 'FC',
        color: 'bg-primary',
      },
      {
        name: 'Felipe Aguilera Millacura',
        role: 'Founder and developer',
        bio: 'Focuses on making features clear and easy to use.',
        initials: 'FA',
        color: 'bg-accent',
      },
      {
        name: 'Jonathan Mateluna',
        role: 'Accounting',
        bio: 'Explains Chilean tax rules in plain language.',
        initials: 'JM',
        color: 'bg-accent/80',
      },
    ],

    valuesLabel: 'What guides us',
    values: [
      { icon: 'HeartIcon', label: 'Respect for the craft' },
      { icon: 'LightBulbIcon', label: 'Practical simplicity' },
      { icon: 'HandRaisedIcon', label: 'Clear communication' },
      { icon: 'UserGroupIcon', label: 'Approachability' },
    ],

    ctaTitle: 'Want to see the demo?',
    ctaBody: 'Explore sample documents, sales, and inventory. Do not use real data.',
    ctaBtn: 'Take the tour',
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
                  { value: '10+', label: lang === 'es' ? 'Años de experiencia en retail' : 'Years in Chilean retail' },
                  { value: '2026', label: lang === 'es' ? 'Nacimiento de Pymio' : 'Pymio founded' },
                  { value: 'Demo', label: lang === 'es' ? 'Etapa actual' : 'Current stage' },
                  { value: 'CL', label: lang === 'es' ? 'Desarrollo en Chile' : 'Developed in Chile' },
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
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
                {tx.teamLabel}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                {tx.teamTitle}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base">{tx.teamSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tx.teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-background border border-border rounded-3xl p-7 flex flex-col items-center text-center gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
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
                href="/#download"
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