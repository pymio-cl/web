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
    heroTitle: 'Hecho para quienes mueven Chile trabajando.',
    heroSubtitle:
      'Pymio nació escuchando a maestros, contratistas y dueños de oficio — no en una oficina de Silicon Valley.',

    // Mission
    missionLabel: 'Nuestra Misión',
    missionTitle: 'Administración y SII al alcance de tu voz',
    missionBody:
      'Miles de gásfiter, electricistas, mecánicos, contratistas y comerciantes en Chile son expertos en su oficio, pero pierden horas valiosas peleando con planillas, cuadernos o portales complejos para emitir una factura. No les falta capacidad — les faltan herramientas hechas para su realidad. Pymio existe para eliminar esa barrera: una app en español chileno donde ordenar tus ventas, clientes y documentos tributarios es tan simple como hablar.',

    // Why
    whyLabel: '¿Por qué Pymio?',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Pensado en Chile y el SII',
        body: 'Diseñado desde cero para la realidad tributaria local: manejo de RUT, giros y flujo preparado para facturación electrónica sin enredos.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Empieza sin barreras',
        body: 'Sin contratos eternos ni costos ocultos para partir. Ordena tus ventas y clientes desde el primer día sin complicaciones.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'La voz como interfaz',
        body: 'Creado para quienes trabajan con las manos y no tienen tiempo para menús infinitos. Si sabes contarlo, sabes registrarlo.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Tus datos, bajo tu control',
        body: 'Información respaldada de forma segura y privada. Jamás vendemos los datos de tu negocio a terceros.',
      },
    ],

    // Story
    storyLabel: 'La Historia',
    storyTitle: 'Del oficio real a una solución simple',
    storyBlocks: [
      {
        year: '2025',
        heading: 'Escuchar antes de programar',
        text: 'Conversando con emprendedores, maestros de oficio y pequeños comercios en Chile, vimos siempre lo mismo: talento de sobra para trabajar, pero frustración total con los sistemas actuales. El software tradicional estaba hecho para oficinas, no para quien está en terreno o atendiendo un local.',
      },
      {
        year: '2026',
        heading: 'Construyendo Pymio',
        text: 'Unimos experiencia real en retail y puntos de venta, ingeniería de software moderna y asesoría tributaria cercana. Formalizamos Pymio en Chile y diseñamos un asistente impulsado por inteligencia artificial que entiende cómo hablamos los chilenos.',
      },
      {
        year: 'Hoy',
        heading: 'Tecnología que no estorba',
        text: 'Seguimos desarrollando Pymio codo a codo con emprendedores reales. Nuestro foco es claro: que registrar una venta, gestionar clientes o preparar una factura tome segundos con la voz, devolviéndote tiempo para tu negocio y tu familia.',
      },
    ],

    // Team
    teamLabel: 'El Equipo',
    teamTitle: 'Personas reales detrás de Pymio',
    teamSubtitle:
      'Combinamos experiencia en comercio local, desarrollo de software e impuestos para crear una herramienta honesta y fácil de usar.',
    teamMembers: [
      {
        name: 'Fabiana Castro Marcano',
        role: 'Fundadora & CEO',
        bio: 'Experta en Puntos de Venta y Retail, con más de 10 años de experiencia en el mercado chileno.',
        initials: 'FC',
        color: 'bg-primary',
      },
      {
        name: 'Felipe Aguilera Millacura',
        role: 'Fundador y Desarrollador',
        bio: 'Diseña pensando en su abuela primero: si la tecnología no es clara para todos, aún no está terminada.',
        initials: 'FA',
        color: 'bg-accent',
      },
      {
        name: 'Jonathan Mateluna',
        role: 'Contabilidad & SII',
        bio: 'Contador que traduce la normativa tributaria chilena al español simple, sin jerga innecesaria.',
        initials: 'JM',
        color: 'bg-accent/80',
      },
    ],

    // Values
    valuesLabel: 'Lo que nos guía',
    values: [
      { icon: 'HeartIcon', label: 'Empatía con el oficio' },
      { icon: 'LightBulbIcon', label: 'Simplicidad radical' },
      { icon: 'HandRaisedIcon', label: 'Transparencia total' },
      { icon: 'UserGroupIcon', label: 'Cercanía real' },
    ],

    // CTA
    ctaTitle: '¿Listo para simplificar tu negocio?',
    ctaBody: 'Descubre cómo llevar el control de tus ventas y clientes hablando en tu propio idioma.',
    ctaBtn: 'Comenzar con Pymio',
    ctaSecondary: 'Volver al inicio',
  },
  en: {
    badge: 'Our Story',
    heroTitle: 'Built for the tradespeople and merchants who move Chile.',
    heroSubtitle:
      'Pymio was born listening to contractors, tradespeople, and local shop owners — not in a Silicon Valley boardroom.',

    missionLabel: 'Our Mission',
    missionTitle: 'Business & SII tax admin at the speed of your voice',
    missionBody:
      'Thousands of plumbers, electricians, mechanics, contractors, and local merchants in Chile are masters of their craft, yet lose hours wrestling with notebooks, spreadsheets, or complex tax portals just to issue an invoice. They don’t lack capability — they lack tools built for how they work. Pymio removes that barrier: an app in natural Chilean Spanish where managing sales, customers, and tax workflows is as simple as speaking.',

    whyLabel: 'Why Pymio?',
    whyCards: [
      {
        icon: 'MapPinIcon',
        title: 'Built for Chile & SII',
        body: 'Designed from the ground up for local tax workflows: RUT validation, business activities, and electronic invoicing readiness without the headache.',
      },
      {
        icon: 'BanknotesIcon',
        title: 'Zero friction to start',
        body: 'No endless contracts or hidden fees to get started. Organize your sales and customers from day one.',
      },
      {
        icon: 'MicrophoneIcon',
        title: 'Voice as the interface',
        body: 'Made for people who work with their hands and don’t have time for endless menus. If you can say it, you can log it.',
      },
      {
        icon: 'ShieldCheckIcon',
        title: 'Your data stays yours',
        body: 'Encrypted, secure storage with strict privacy. We never sell your business data to third parties.',
      },
    ],

    storyLabel: 'The Story',
    storyTitle: 'From real-world trades to a simple tool',
    storyBlocks: [
      {
        year: '2025',
        heading: 'Listening before coding',
        text: 'Talking with Chilean tradespeople, contractors, and neighborhood shop owners, we saw the same pattern everywhere: immense skill in their craft, paired with total frustration toward existing software built for desk accountants rather than people on the job.',
      },
      {
        year: '2026',
        heading: 'Building Pymio',
        text: 'We brought together deep retail and POS experience, modern software engineering, and approachable tax expertise. We registered Pymio in Chile and built an AI voice assistant that genuinely understands Chilean Spanish.',
      },
      {
        year: 'Today',
        heading: 'Technology that stays out of the way',
        text: 'We continue shaping Pymio alongside real entrepreneurs. Our goal is straightforward: logging a sale, managing clients, or preparing an invoice should take seconds by voice — giving you back time for your work and family.',
      },
    ],

    teamLabel: 'The Team',
    teamTitle: 'Real people behind Pymio',
    teamSubtitle:
      'We combine local retail expertise, software engineering, and accounting know-how to build an honest, easy-to-use tool.',
    teamMembers: [
      {
        name: 'Fabiana Castro Marcano',
        role: 'Founder & CEO',
        bio: 'Expert in Point of Sale and Retail, with 10+ years of experience in the Chilean market.',
        initials: 'FC',
        color: 'bg-primary',
      },
      {
        name: 'Felipe Aguilera Millacura',
        role: 'Founder & Developer',
        bio: 'Designs for his grandmother first — if technology isn’t clear to everyone, it isn’t finished yet.',
        initials: 'FA',
        color: 'bg-accent',
      },
      {
        name: 'Jonathan Mateluna',
        role: 'Accounting & SII',
        bio: 'An accountant who translates Chilean tax rules into plain, everyday language.',
        initials: 'JM',
        color: 'bg-accent/80',
      },
    ],

    valuesLabel: 'What guides us',
    values: [
      { icon: 'HeartIcon', label: 'Respect for the craft' },
      { icon: 'LightBulbIcon', label: 'Radical simplicity' },
      { icon: 'HandRaisedIcon', label: 'Total honesty' },
      { icon: 'UserGroupIcon', label: 'Real closeness' },
    ],

    ctaTitle: 'Ready to simplify your business?',
    ctaBody: 'See how easy it is to track sales and customers just by speaking in your own words.',
    ctaBtn: 'Get Started with Pymio',
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
                  { value: '100%', label: lang === 'es' ? 'Enfocado en simplicidad' : 'Simplicity-first design' },
                  { value: 'CL', label: lang === 'es' ? 'Hecho en Chile para el SII' : 'Built in Chile for SII' },
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