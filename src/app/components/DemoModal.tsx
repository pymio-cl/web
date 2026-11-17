'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'es' | 'en';
}

const t = {
  es: {
    title: 'Recorrido por Pymio',
    subtitle: 'Demo de desarrollo · Cifras ilustrativas',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
    finish: 'Volver al sitio',
    stepOf: (current: number, total: number) => `Paso ${current} de ${total}`,
    steps: [
      {
        id: 'sii',
        tag: 'Documentos de prueba',
        title: 'Revisa borradores de documentos tributarios',
        description:
          'La app prepara borradores de boletas y facturas, valida el formato del RUT y calcula el IVA. No envía documentos al SII ni tienen validez tributaria.',
        highlight: 'IVA 19% calculado · RUT validado · Sin envío al SII',
        iconBg: 'bg-secondary',
        iconColor: 'text-secondary-foreground',
        icon: 'DocumentTextIcon',
        mockup: {
          header: 'Nueva Boleta Electrónica',
          lines: [
            { label: 'Cliente', value: 'Consumidor Final' },
            { label: 'Producto', value: 'Empanadas x12' },
            { label: 'Monto', value: '$14.400' },
            { label: 'IVA (19%)', value: '$2.304' },
          ],
          total: '$16.704',
          badge: 'Borrador de ejemplo',
          badgeColor: 'bg-secondary text-secondary-foreground',
        },
      },
      {
        id: 'sales',
        tag: 'Control de Ventas',
        title: 'Revisa un resumen de ventas',
        description:
          'Explora un resumen de ventas y alertas de stock. Las cifras de esta vista son ilustrativas y no corresponden a datos de tu negocio.',
        highlight: 'Resumen visual · Stock de ejemplo',
        iconBg: 'bg-primary/15',
        iconColor: 'text-primary-foreground',
        icon: 'ChartBarIcon',
        mockup: {
          header: 'Resumen de Ventas',
          chart: [
            { day: 'Lun', pct: 55, val: '$82k' },
            { day: 'Mar', pct: 70, val: '$105k' },
            { day: 'Mié', pct: 45, val: '$67k' },
            { day: 'Jue', pct: 85, val: '$127k' },
            { day: 'Vie', pct: 100, val: '$149k' },
            { day: 'Sáb', pct: 90, val: '$135k' },
          ],
          total: 'Ejemplo',
          badge: 'Cifras ilustrativas',
          badgeColor: 'bg-secondary text-secondary-foreground',
        },
      },
      {
        id: 'voice',
        tag: 'Asistente de Voz',
        title: 'Conoce el registro de ventas por voz',
        description:
          'La app de desarrollo usa Gemini para interpretar comandos y preparar borradores de venta. Requiere internet y tu propia clave de Gemini.',
        highlight: 'Español chileno · Requiere internet · Borrador por confirmar',
        iconBg: 'bg-accent/20',
        iconColor: 'text-accent-foreground',
        icon: 'MicrophoneIcon',
        mockup: {
          header: 'Asistente de Voz Pymio',
          conversation: [
            { who: 'user', text: '"Vendí tres panes de molde a mil quinientos"' },
            { who: 'bot', text: 'Borrador: 3× Pan de Molde — $4.500' },
            { who: 'user', text: '"Y dos jugos naturales a dos mil"' },
            { who: 'bot', text: 'Borrador: 2× Jugo Natural — $4.000' },
          ],
          total: 'Total de borradores de ejemplo: $8.500',
          badge: 'Ejemplo',
          badgeColor: 'bg-accent/20 text-accent-foreground',
        },
      },
    ],
  },
  en: {
    title: 'Explore Pymio',
    subtitle: 'Development demo · Illustrative figures',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    finish: 'Back to the site',
    stepOf: (current: number, total: number) => `Step ${current} of ${total}`,
    steps: [
      {
        id: 'sii',
        tag: 'Sample documents',
        title: 'Review tax-document drafts',
        description:
          'The app prepares receipt and invoice drafts, checks RUT format, and calculates VAT. It does not send documents to the SII, and they have no tax validity.',
        highlight: '19% VAT calculated · RUT validated · Not sent to SII',
        iconBg: 'bg-secondary',
        iconColor: 'text-secondary-foreground',
        icon: 'DocumentTextIcon',
        mockup: {
          header: 'New Electronic Invoice',
          lines: [
            { label: 'Client', value: 'Final Consumer' },
            { label: 'Product', value: 'Empanadas ×12' },
            { label: 'Amount', value: '$14,400' },
            { label: 'VAT (19%)', value: '$2,304' },
          ],
          total: '$16,704',
          badge: 'Sample draft',
          badgeColor: 'bg-secondary text-secondary-foreground',
        },
      },
      {
        id: 'sales',
        tag: 'Sales Tracking',
        title: 'Review a sales summary',
        description:
          'Explore a sales summary and stock alerts. The figures in this view are illustrative and do not represent your business data.',
        highlight: 'Visual summary · Sample stock',
        iconBg: 'bg-primary/15',
        iconColor: 'text-primary-foreground',
        icon: 'ChartBarIcon',
        mockup: {
          header: 'Sales Summary',
          chart: [
            { day: 'Mon', pct: 55, val: '$82k' },
            { day: 'Tue', pct: 70, val: '$105k' },
            { day: 'Wed', pct: 45, val: '$67k' },
            { day: 'Thu', pct: 85, val: '$127k' },
            { day: 'Fri', pct: 100, val: '$149k' },
            { day: 'Sat', pct: 90, val: '$135k' },
          ],
          total: 'Sample',
          badge: 'Illustrative figures',
          badgeColor: 'bg-secondary text-secondary-foreground',
        },
      },
      {
        id: 'voice',
        tag: 'Voice Assistant',
        title: 'See how voice sales entry works',
        description:
          'The development app uses Gemini to interpret commands and prepare sales drafts. It requires internet and your own Gemini key.',
        highlight: 'Chilean Spanish · Internet required · Draft needs confirmation',
        iconBg: 'bg-accent/20',
        iconColor: 'text-accent-foreground',
        icon: 'MicrophoneIcon',
        mockup: {
          header: 'Pymio Voice Assistant',
          conversation: [
            { who: 'user', text: '"Sold three loaves of bread at fifteen hundred"' },
            { who: 'bot', text: 'Draft: 3× Bread Loaf — $4,500' },
            { who: 'user', text: '"And two fresh juices at two thousand"' },
            { who: 'bot', text: 'Draft: 2× Fresh Juice — $4,000' },
          ],
          total: 'Sample drafts total: $8,500',
          badge: 'Sample',
          badgeColor: 'bg-accent/20 text-accent-foreground',
        },
      },
    ],
  },
};

type Step = (typeof t.es.steps)[number];

function SIIMockup({ step }: { step: Step }) {
  const mockup = step.mockup as {
    header: string;
    lines: { label: string; value: string }[];
    total: string;
    badge: string;
    badgeColor: string;
  };
  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden w-full max-w-xs mx-auto">
      <div className="bg-foreground px-4 py-3">
        <p className="text-white font-bold text-sm">{mockup.header}</p>
      </div>
      <div className="p-4 space-y-2.5">
        {mockup.lines.map((line, i) => (
          <div key={i} className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{line.label}</span>
            <span className="font-semibold text-foreground">{line.value}</span>
          </div>
        ))}
        <div className="border-t border-dashed border-border pt-2.5 flex justify-between items-center">
          <span className="font-bold text-foreground text-sm">Total</span>
          <span className="font-extrabold text-foreground text-base">{mockup.total}</span>
        </div>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${mockup.badgeColor}`}>
          {mockup.badge}
        </div>
      </div>
    </div>
  );
}

function SalesMockup({ step }: { step: Step }) {
  const mockup = step.mockup as {
    header: string;
    chart: { day: string; pct: number; val: string }[];
    total: string;
    badge: string;
    badgeColor: string;
  };
  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden w-full max-w-xs mx-auto">
      <div className="bg-foreground px-4 py-3 flex justify-between items-center">
        <p className="text-white font-bold text-sm">{mockup.header}</p>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/15 text-white">{mockup.total}</span>
      </div>
      <div className="p-4">
        <div className="flex items-end gap-1.5 h-24 mb-3">
          {mockup.chart.map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[9px] text-muted-foreground font-medium">{bar.val}</span>
              <div
                className="w-full rounded-t-md bg-brand-turquoise/80 transition-all duration-500"
                style={{ height: `${bar.pct}%` }}
              />
              <span className="text-[9px] text-muted-foreground font-semibold">{bar.day}</span>
            </div>
          ))}
        </div>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${mockup.badgeColor}`}>
          {mockup.badge}
        </div>
      </div>
    </div>
  );
}

function VoiceMockup({ step }: { step: Step }) {
  const mockup = step.mockup as {
    header: string;
    conversation: { who: string; text: string }[];
    total: string;
    badge: string;
    badgeColor: string;
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden w-full max-w-xs mx-auto">
      <div className="bg-foreground px-4 py-3 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-turquoise" />
        <p className="text-white font-bold text-sm">{mockup.header}</p>
      </div>
      <div className="p-4 space-y-2.5">
        {mockup.conversation.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.who === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs font-medium leading-snug ${
                msg.who === 'user' ?'bg-secondary text-secondary-foreground rounded-br-sm' :'bg-muted text-foreground rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div className="border-t border-dashed border-border pt-2 text-xs font-bold text-foreground">
          {mockup.total}
        </div>
      </div>
    </div>
  );
}

function StepMockup({ step }: { step: Step }) {
  if (step.id === 'sii') return <SIIMockup step={step} />;
  if (step.id === 'sales') return <SalesMockup step={step} />;
  return <VoiceMockup step={step} />;
}

export default function DemoModal({ isOpen, onClose, lang }: DemoModalProps) {
  const tx = t[lang];
  const [currentStep, setCurrentStep] = useState(0);
  const [animDir, setAnimDir] = useState<'left' | 'right'>('right');
  const [visible, setVisible] = useState(true);
  const totalSteps = tx.steps.length;

  const goTo = useCallback(
    (idx: number, dir: 'left' | 'right') => {
      setAnimDir(dir);
      setVisible(false);
      setTimeout(() => {
        setCurrentStep(idx);
        setVisible(true);
      }, 220);
    },
    []
  );

  const handleNext = () => {
    if (currentStep < totalSteps - 1) goTo(currentStep + 1, 'right');
  };
  const handlePrev = () => {
    if (currentStep > 0) goTo(currentStep - 1, 'left');
  };

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setVisible(true);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const step = tx.steps[currentStep];
  const isLast = currentStep === totalSteps - 1;

  const slideClass = visible
    ? 'opacity-100 translate-x-0'
    : animDir === 'right' ?'opacity-0 translate-x-6' :'opacity-0 -translate-x-6';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={tx.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-2xl bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border">
          <div>
            <h2 className="text-lg font-extrabold text-foreground tracking-tight">{tx.title}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{tx.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-secondary transition-colors"
            aria-label={tx.close}
          >
            <Icon name="XMarkIcon" size={18} className="text-foreground" />
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 px-6 pt-4">
          {tx.steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > currentStep ? 'right' : 'left')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                i === currentStep
                  ? 'bg-foreground text-white shadow-sm'
                  : i < currentStep
                  ? 'bg-secondary text-secondary-foreground' :'bg-muted text-muted-foreground border border-border'
              }`}
            >
              {i < currentStep && (
                <Icon name="CheckIcon" size={12} className="text-secondary-foreground" />
              )}
              {s.tag}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground font-medium">
            {tx.stepOf(currentStep + 1, totalSteps)}
          </span>
        </div>

        {/* Step content */}
        <div
          className={`flex-1 overflow-y-auto px-6 py-5 transition-all duration-200 ${slideClass}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

            {/* Left: Text */}
            <div className="flex flex-col gap-4">
              <div className={`inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-bold ${step.iconBg} ${step.iconColor}`}>
                <Icon name={step.icon as Parameters<typeof Icon>[0]['name']} size={14} />
                {step.tag}
              </div>
              <h3 className="text-xl font-extrabold text-foreground leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              <div className={`flex flex-wrap gap-1.5`}>
                {step.highlight.split(' · ').map((h, i) => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${step.iconBg} ${step.iconColor}`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Mockup */}
            <div className="flex items-center justify-center">
              <StepMockup step={step} />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-brand-turquoise transition-all duration-400"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Footer navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/50">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="ChevronLeftIcon" size={16} />
            {tx.prev}
          </button>

          {isLast ? (
            <a
              href="/#hero"
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-secondary transition-colors shadow-md"
            >
              <Icon name="ArrowDownTrayIcon" size={16} />
              {tx.finish}
            </a>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-secondary transition-colors shadow-md"
            >
              {tx.next}
              <Icon name="ChevronRightIcon" size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
