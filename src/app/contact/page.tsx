'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

type Lang = 'es' | 'en';
type Category = '' | 'sii' | 'technical' | 'partnership' | 'billing' | 'other';

const t = {
  es: {
    badge: 'Estamos aquí para ayudarte',
    heroTitle: 'Habla con el equipo Pymio.',
    heroSubtitle:
      'Somos un equipo chileno real. Respondemos en español, entendemos el SII y sabemos lo que significa llevar un negocio pequeño.',

    // Form
    formTitle: 'Envíanos un mensaje',
    formSubtitle: 'Te respondemos en menos de 24 horas hábiles.',
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
    placeholderMessage: 'Cuéntanos cómo podemos ayudarte...',
    placeholderCategory: 'Selecciona una categoría',
    categories: [
      { value: 'sii', label: '🧾 Ayuda con el SII / Facturación' },
      { value: 'technical', label: '🔧 Problema técnico con la app' },
      { value: 'partnership', label: '🤝 Alianzas y colaboraciones' },
      { value: 'billing', label: '💳 Consulta sobre planes' },
      { value: 'other', label: '💬 Otra consulta' },
    ],
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    successTitle: '¡Mensaje enviado!',
    successBody:
      'Gracias por escribirnos. Un miembro del equipo Pymio te contactará pronto.',
    successReset: 'Enviar otro mensaje',
    required: 'Este campo es obligatorio',
    invalidEmail: 'Ingresa un correo válido',

    // Contact info
    infoTitle: 'Información de contacto',
    infoItems: [
      {
        icon: 'EnvelopeIcon',
        label: 'Email',
        value: 'hola@pymio.cl',
        href: 'mailto:hola@pymio.cl',
      },
      {
        icon: 'PhoneIcon',
        label: 'WhatsApp',
        value: '+56 9 8765 4321',
        href: 'https://wa.me/56987654321',
      },
      {
        icon: 'MapPinIcon',
        label: 'Ubicación',
        value: 'Santiago, Región Metropolitana, Chile',
        href: null,
      },
      {
        icon: 'ClockIcon',
        label: 'Horario de atención',
        value: 'Lun–Vie, 9:00–18:00 (CLT)',
        href: null,
      },
    ],

    // FAQ mini
    faqTitle: 'Preguntas frecuentes de soporte',
    faqs: [
      {
        q: '¿Cuánto demoran en responder?',
        a: 'Respondemos todos los mensajes en menos de 24 horas hábiles. Los problemas técnicos urgentes los atendemos el mismo día.',
      },
      {
        q: '¿Puedo llamar directamente?',
        a: 'Por ahora atendemos por WhatsApp y correo. Estamos trabajando en soporte telefónico directo.',
      },
      {
        q: '¿Tienen soporte para el SII?',
        a: 'Sí. Nuestro equipo incluye contadores con experiencia en el SII chileno. Podemos ayudarte con dudas de facturación electrónica.',
      },
    ],

    // Category highlights
    categoryTitle: '¿En qué podemos ayudarte?',
    categoryCards: [
      {
        icon: 'DocumentTextIcon',
        title: 'Ayuda con el SII',
        body: 'Facturación electrónica, boletas, RUT, y todo lo que necesitas para cumplir con el Servicio de Impuestos Internos.',
        tag: 'sii',
      },
      {
        icon: 'WrenchScrewdriverIcon',
        title: 'Soporte técnico',
        body: 'Problemas con la app, errores de sincronización, recuperación de datos o cualquier falla técnica.',
        tag: 'technical',
      },
      {
        icon: 'HandshakeIcon',
        title: 'Alianzas',
        body: 'Integraciones, distribución, programas de referidos o colaboraciones con otras empresas y organizaciones.',
        tag: 'partnership',
      },
    ],
  },
  en: {
    badge: 'We\'re here to help',
    heroTitle: 'Talk to the Pymio team.',
    heroSubtitle:
      'We\'re a real Chilean team. We respond in Spanish, understand the SII, and know what it means to run a small business.',

    formTitle: 'Send us a message',
    formSubtitle: 'We reply within 24 business hours.',
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
    placeholderMessage: 'Tell us how we can help you...',
    placeholderCategory: 'Select a category',
    categories: [
      { value: 'sii', label: '🧾 SII / Invoicing Help' },
      { value: 'technical', label: '🔧 Technical Issue with the App' },
      { value: 'partnership', label: '🤝 Partnerships & Collaborations' },
      { value: 'billing', label: '💳 Plan Inquiry' },
      { value: 'other', label: '💬 Other' },
    ],
    submit: 'Send message',
    submitting: 'Sending...',
    successTitle: 'Message sent!',
    successBody:
      'Thanks for reaching out. A Pymio team member will contact you shortly.',
    successReset: 'Send another message',
    required: 'This field is required',
    invalidEmail: 'Enter a valid email address',

    infoTitle: 'Contact information',
    infoItems: [
      {
        icon: 'EnvelopeIcon',
        label: 'Email',
        value: 'hola@pymio.cl',
        href: 'mailto:hola@pymio.cl',
      },
      {
        icon: 'PhoneIcon',
        label: 'WhatsApp',
        value: '+56 9 8765 4321',
        href: 'https://wa.me/56987654321',
      },
      {
        icon: 'MapPinIcon',
        label: 'Location',
        value: 'Santiago, Región Metropolitana, Chile',
        href: null,
      },
      {
        icon: 'ClockIcon',
        label: 'Support hours',
        value: 'Mon–Fri, 9:00–18:00 (CLT)',
        href: null,
      },
    ],

    faqTitle: 'Support FAQs',
    faqs: [
      {
        q: 'How long does it take to get a reply?',
        a: 'We respond to all messages within 24 business hours. Urgent technical issues are handled the same day.',
      },
      {
        q: 'Can I call directly?',
        a: 'For now we support via WhatsApp and email. We\'re working on direct phone support.',
      },
      {
        q: 'Do you have SII support?',
        a: 'Yes. Our team includes accountants experienced with the Chilean SII. We can help with electronic invoicing questions.',
      },
    ],

    categoryTitle: 'How can we help?',
    categoryCards: [
      {
        icon: 'DocumentTextIcon',
        title: 'SII Help',
        body: 'Electronic invoicing, receipts, RUT, and everything you need to comply with Chile\'s Internal Revenue Service.',
        tag: 'sii',
      },
      {
        icon: 'WrenchScrewdriverIcon',
        title: 'Technical Support',
        body: 'App issues, sync errors, data recovery, or any technical failure you\'re experiencing.',
        tag: 'technical',
      },
      {
        icon: 'HandshakeIcon',
        title: 'Partnerships',
        body: 'Integrations, distribution, referral programs, or collaborations with other companies and organizations.',
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', company: '', category: '', message: '' });
    setErrors({});
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

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Icon name="CheckCircleIcon" size={40} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-foreground mb-2">{tx.successTitle}</h3>
                      <p className="text-muted-foreground text-sm max-w-xs">{tx.successBody}</p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-2 px-6 py-2.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                    >
                      {tx.successReset}
                    </button>
                  </div>
                ) : (
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
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          {tx.submitting}
                        </>
                      ) : (
                        <>
                          <Icon name="PaperAirplaneIcon" size={16} variant="solid" />
                          {tx.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
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
                    {lang === 'es' ? 'Empresa chilena, soporte en español' : 'Chilean company, Spanish-first support'}
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
