'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

type Lang = 'es' | 'en';
type Category = '' | 'sii' | 'technical' | 'partnership' | 'other';

const t = {
  es: {
    badge: 'Contacto',
    heroTitle: 'Escríbenos a Pymio.',
    heroSubtitle:
      'Cuéntanos qué necesitas saber sobre la demo. No incluyas datos personales ni información real de tu negocio.',

    // Form
    formTitle: 'Prepara un correo',
    formSubtitle: 'Al continuar, se abrirá tu aplicación de correo con el mensaje para que lo revises y envíes.',
    labelName: 'Nombre completo',
    labelEmail: 'Correo electrónico',
    labelPhone: 'Teléfono (opcional)',
    labelCompany: 'Nombre del negocio',
    labelCategory: 'Tipo de consulta',
    labelMessage: 'Tu mensaje',
    placeholderName: 'Ej: María González',
    placeholderEmail: 'Ej: maria@minegocio.cl',
    placeholderPhone: 'Ej: +56 9 1234 5678',
    placeholderCompany: 'Ej: Tienda La Esperanza',
    placeholderMessage: 'Escribe tu consulta sobre la demo...',
    placeholderCategory: 'Selecciona una categoría',
    categories: [
      { value: 'sii', label: 'Documentos de ejemplo y SII' },
      { value: 'technical', label: 'Uso de la demo' },
      { value: 'partnership', label: 'Colaboraciones' },
      { value: 'other', label: 'Otra consulta' },
    ],
    submit: 'Abrir aplicación de correo',
    required: 'Este campo es obligatorio',
    invalidEmail: 'Ingresa un correo válido',

    // Contact info
    infoTitle: 'Correo de contacto',
    infoItems: [
      {
        icon: 'EnvelopeIcon',
        label: 'Email',
        value: 'hola@pymio.cl',
        href: 'mailto:hola@pymio.cl',
      },
    ],

    // FAQ mini
    faqTitle: 'Preguntas sobre la demo',
    faqs: [
      {
        q: '¿El recorrido web envía mi consulta?',
        a: 'No. Al continuar se abre tu aplicación de correo con el mensaje preparado. Debes revisarlo y enviarlo desde allí.',
      },
      {
        q: '¿Pymio está conectado al SII?',
        a: 'No. Los documentos que muestra la demo son borradores y no se transmiten al SII ni tienen validez tributaria.',
      },
      {
        q: '¿Puedo incluir datos reales en mi consulta?',
        a: 'No incluyas información personal ni datos reales o sensibles de tu negocio.',
      },
    ],

    // Category highlights
    categoryTitle: 'Elige un tema para tu consulta',
    categoryCards: [
      {
        icon: 'DocumentTextIcon',
        title: 'Documentos de ejemplo',
        body: 'La demo muestra borradores. No se conecta al SII ni emite documentos tributarios válidos.',
        tag: 'sii',
      },
      {
        icon: 'WrenchScrewdriverIcon',
        title: 'Uso de la demo',
        body: 'Consulta sobre los ejemplos de ventas, inventario o el recorrido de Voz Pymio.',
        tag: 'technical',
      },
      {
        icon: 'HandshakeIcon',
        title: 'Colaboraciones',
        body: 'Escríbenos si quieres conversar sobre una posible colaboración.',
        tag: 'partnership',
      },
    ],
  },
  en: {
    badge: 'Contact',
    heroTitle: 'Email Pymio.',
    heroSubtitle:
      'Ask us about the demo. Do not include personal information or real business data.',

    formTitle: 'Prepare an email',
    formSubtitle: 'Continue to open your email app with the message ready to review and send.',
    labelName: 'Full name',
    labelEmail: 'Email address',
    labelPhone: 'Phone (optional)',
    labelCompany: 'Business name',
    labelCategory: 'Inquiry type',
    labelMessage: 'Your message',
    placeholderName: 'e.g. María González',
    placeholderEmail: 'e.g. maria@mybusiness.cl',
    placeholderPhone: 'e.g. +56 9 1234 5678',
    placeholderCompany: 'e.g. La Esperanza Store',
    placeholderMessage: 'Write your question about the demo...',
    placeholderCategory: 'Select a category',
    categories: [
      { value: 'sii', label: 'Sample documents and SII' },
      { value: 'technical', label: 'Using the demo' },
      { value: 'partnership', label: 'Partnerships' },
      { value: 'other', label: 'Other question' },
    ],
    submit: 'Open email app',
    required: 'This field is required',
    invalidEmail: 'Enter a valid email address',

    infoTitle: 'Contact email',
    infoItems: [
      {
        icon: 'EnvelopeIcon',
        label: 'Email',
        value: 'hola@pymio.cl',
        href: 'mailto:hola@pymio.cl',
      },
    ],

    faqTitle: 'About the demo',
    faqs: [
      {
        q: 'Does the web tour send my question?',
        a: 'No. Continuing opens your email app with the message prepared. Review and send it from there.',
      },
      {
        q: 'Is Pymio connected to the SII?',
        a: 'No. Documents in the demo are drafts. They are not sent to the SII and have no tax validity.',
      },
      {
        q: 'Can I include real data in my question?',
        a: 'Do not include personal information or real or sensitive business data.',
      },
    ],

    categoryTitle: 'Choose a topic',
    categoryCards: [
      {
        icon: 'DocumentTextIcon',
        title: 'Sample documents',
        body: 'The demo shows drafts. It does not connect to the SII or issue valid tax documents.',
        tag: 'sii',
      },
      {
        icon: 'WrenchScrewdriverIcon',
        title: 'Using the demo',
        body: 'Ask about the sales, inventory, or Voz Pymio examples in the tour.',
        tag: 'technical',
      },
      {
        icon: 'HandshakeIcon',
        title: 'Partnerships',
        body: 'Email us if you would like to discuss a possible collaboration.',
        tag: 'partnership',
      },
    ],
  },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: Category;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>('es');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const tx = t[lang];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = tx.required;
    if (!form.email.trim()) {
      newErrors.email = tx.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = tx.invalidEmail;
    }
    if (!form.category) newErrors.category = tx.required;
    if (!form.message.trim()) newErrors.message = tx.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const category = tx.categories.find((item) => item.value === form.category)?.label ?? form.category;
    const subject = `${lang === 'es' ? 'Consulta sobre Pymio' : 'Pymio inquiry'}: ${category}`;
    const body = [
      `${lang === 'es' ? 'Nombre' : 'Name'}: ${form.name}`,
      `${lang === 'es' ? 'Correo' : 'Email'}: ${form.email}`,
      form.phone && `${lang === 'es' ? 'Teléfono' : 'Phone'}: ${form.phone}`,
      form.company && `${lang === 'es' ? 'Negocio' : 'Business'}: ${form.company}`,
      '',
      form.message,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:hola@pymio.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const categoryTagColors: Record<string, string> = {
    sii: 'bg-amber-100 text-amber-700 border-amber-200',
    technical: 'bg-blue-100 text-blue-700 border-blue-200',
    partnership: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header lang={lang} onLangChange={setLang} />

      <main className="flex-1 pt-24">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={14} />
              {tx.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-5">
              {tx.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {tx.heroSubtitle}
            </p>
          </div>
        </section>

        {/* ── Category Cards ── */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 text-center">
            {tx.categoryTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tx.categoryCards.map((card) => (
              <div
                key={card.tag}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setForm((f) => ({ ...f, category: card.tag as Category }));
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={card.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${categoryTagColors[card.tag]}`}>
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Grid: Form + Info ── */}
        <section id="contact-form" className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ── Contact Form (3/5) ── */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-foreground mb-1">{tx.formTitle}</h2>
                  <p className="text-sm text-muted-foreground">{tx.formSubtitle}</p>
                </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          {tx.labelName} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder={tx.placeholderName}
                          className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.name ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          {tx.labelEmail} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          placeholder={tx.placeholderEmail}
                          className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${errors.email ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          {tx.labelPhone}
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder={tx.placeholderPhone}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          {tx.labelCompany}
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                          placeholder={tx.placeholderCompany}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        {tx.labelCategory} <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as Category }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none cursor-pointer ${errors.category ? 'border-red-400' : 'border-border'} ${!form.category ? 'text-muted-foreground/60' : ''}`}
                      >
                        <option value="" disabled>{tx.placeholderCategory}</option>
                        {tx.categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                      {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        {tx.labelMessage} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder={tx.placeholderMessage}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-border'}`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Icon name="PaperAirplaneIcon" size={16} variant="solid" />
                      {tx.submit}
                    </button>
                  </form>
              </div>
            </div>

            {/* ── Right Column: Info + FAQ (2/5) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Contact Info Card */}
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
                <h2 className="text-lg font-extrabold mb-6">{tx.infoTitle}</h2>
                <div className="flex flex-col gap-5">
                  {tx.infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={17} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-foreground/60 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-semibold text-primary-foreground hover:text-white/80 transition-colors underline-offset-2 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-primary-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chile flag accent */}
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-2">
                  <span className="text-xl">🇨🇱</span>
                  <span className="text-xs text-primary-foreground/70 font-medium">
                    {lang === 'es' ? 'Pymio · Chile' : 'Pymio · Chile'}
                  </span>
                </div>
              </div>

              {/* Mini FAQ */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h2 className="text-base font-extrabold text-foreground mb-5">{tx.faqTitle}</h2>
                <div className="flex flex-col gap-2">
                  {tx.faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-muted transition-colors"
                      >
                        <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                        <Icon
                          name={openFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                          size={16}
                          className="text-muted-foreground flex-shrink-0"
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
