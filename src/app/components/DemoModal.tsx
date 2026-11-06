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
    title: 'Tour de Pymio',
    subtitle: 'Descubre cómo Pymio transforma tu negocio',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
    finish: 'Empezar Gratis',
    stepOf: (current: number, total: number) => `Paso ${current} de ${total}`,
    steps: [
      {
        id: 'sii',
        tag: 'Facturación SII',
        title: 'Crea documentos tributarios sin complicaciones',
        description:
          'Crea boletas y facturas con varios productos. Pymio valida el RUT y calcula el IVA por ti. En la demo el documento se guarda localmente.',
        highlight: 'IVA 19% automático · RUT validado · Envío al SII próximamente',
        color: 'from-cyan-500 to-teal-600',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-700',
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
          badge: '✓ Guardado (demo)',
          badgeColor: 'bg-green-100 text-green-700',
        },
      },
      {
        id: 'sales',
        tag: 'Control de Ventas',
        title: 'Controla tus ventas en tiempo real',
        description:
          'Ve cuánto vendiste hoy, esta semana y este mes. Identifica tus productos más vendidos y toma decisiones con datos reales de tu negocio.',
        highlight: 'Gráficos claros · Alertas de stock · Exporta a Excel',
        color: 'from-blue-500 to-cyan-600',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-700',
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
          total: '$665.000',
          badge: '↑ +18% esta semana',
          badgeColor: 'bg-blue-100 text-blue-700',
        },
      },
      {
        id: 'voice',
        tag: 'Asistente de Voz',
        title: 'Registra ventas con tu voz',
        description:
          'Habla naturalmente y Pymio registra la venta por ti. Perfecto para cuando tienes las manos ocupadas atendiendo clientes en tu feria o tienda.',
        highlight: 'Español chileno · Sin escribir · Funciona offline',
        color: 'from-violet-500 to-purple-600',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-700',
        icon: 'MicrophoneIcon',
        mockup: {
          header: 'Asistente de Voz Pymio',
          conversation: [
            { who: 'user', text: '"Vendí tres panes de molde a mil quinientos"' },
            { who: 'bot', text: '✓ Registrado: 3× Pan de Molde — $4.500' },
            { who: 'user', text: '"Y dos jugos naturales a dos mil"' },
            { who: 'bot', text: '✓ Registrado: 2× Jugo Natural — $4.000' },
          ],
          total: 'Total sesión: $8.500',
          badge: '🎙 Escuchando...',
          badgeColor: 'bg-violet-100 text-violet-700',
        },
      },
    ],
  },
  en: {
    title: 'Pymio Tour',
    subtitle: 'Discover how Pymio transforms your business',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    finish: 'Start for Free',
    stepOf: (current: number, total: number) => `Step ${current} of ${total}`,
    steps: [
      {
        id: 'sii',
        tag: 'SII Invoicing',
        title: 'Create tax documents with no hassle',
        description:
          'Create receipts and invoices with multiple products. Pymio validates the RUT and calculates VAT for you. In the demo the document is saved locally.',
        highlight: 'Automatic 19% VAT · RUT validated · SII submission coming soon',
        color: 'from-cyan-500 to-teal-600',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-700',
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
          badge: '✓ Saved (demo)',
          badgeColor: 'bg-green-100 text-green-700',
        },
      },
      {
        id: 'sales',
        tag: 'Sales Tracking',
        title: 'Track your sales in real time',
        description:
          'See how much you sold today, this week, and this month. Identify your best-selling products and make decisions with real data.',
        highlight: 'Clear charts · Stock alerts · Export to Excel',
        color: 'from-blue-500 to-cyan-600',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-700',
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
          total: '$665,000',
          badge: '↑ +18% this week',
          badgeColor: 'bg-blue-100 text-blue-700',
        },
      },
      {
        id: 'voice',
        tag: 'Voice Assistant',
        title: 'Record sales with your voice',
        description:
          'Speak naturally and Pymio logs the sale for you. Perfect for when your hands are busy serving customers at your market stall or store.',
        highlight: 'Chilean Spanish · No typing · Works offline',
        color: 'from-violet-500 to-purple-600',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-700',
        icon: 'MicrophoneIcon',
        mockup: {
          header: 'Pymio Voice Assistant',
          conversation: [
            { who: 'user', text: '"Sold three loaves of bread at fifteen hundred"' },
            { who: 'bot', text: '✓ Logged: 3× Bread Loaf — $4,500' },
            { who: 'user', text: '"And two fresh juices at two thousand"' },
            { who: 'bot', text: '✓ Logged: 2× Fresh Juice — $4,000' },
          ],
          total: 'Session total: $8,500',
          badge: '🎙 Listening...',
          badgeColor: 'bg-violet-100 text-violet-700',
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-xs mx-auto">
      <div className={`bg-gradient-to-r ${step.color} px-4 py-3`}>
        <p className="text-white font-bold text-sm">{mockup.header}</p>
      </div>
      <div className="p-4 space-y-2.5">
        {mockup.lines.map((line, i) => (
          <div key={i} className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{line.label}</span>
            <span className="font-semibold text-gray-800">{line.value}</span>
          </div>
        ))}
        <div className="border-t border-dashed border-gray-200 pt-2.5 flex justify-between items-center">
          <span className="font-bold text-gray-800 text-sm">Total</span>
          <span className="font-extrabold text-gray-900 text-base">{mockup.total}</span>
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-xs mx-auto">
      <div className={`bg-gradient-to-r ${step.color} px-4 py-3 flex justify-between items-center`}>
        <p className="text-white font-bold text-sm">{mockup.header}</p>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/20 text-white`}>{mockup.total}</span>
      </div>
      <div className="p-4">
        <div className="flex items-end gap-1.5 h-24 mb-3">
          {mockup.chart.map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[9px] text-gray-400 font-medium">{bar.val}</span>
              <div
                className={`w-full rounded-t-md bg-gradient-to-t ${step.color} opacity-80 transition-all duration-500`}
                style={{ height: `${bar.pct}%` }}
              />
              <span className="text-[9px] text-gray-500 font-semibold">{bar.day}</span>
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
  const [pulse, setPulse] = useState(false);
  const mockup = step.mockup as {
    header: string;
    conversation: { who: string; text: string }[];
    total: string;
    badge: string;
    badgeColor: string;
  };

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full max-w-xs mx-auto">
      <div className={`bg-gradient-to-r ${step.color} px-4 py-3 flex items-center gap-2`}>
        <div className={`w-2.5 h-2.5 rounded-full bg-white transition-opacity duration-300 ${pulse ? 'opacity-100' : 'opacity-40'}`} />
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
                msg.who === 'user' ?'bg-violet-100 text-violet-800 rounded-br-sm' :'bg-gray-100 text-gray-700 rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div className="border-t border-dashed border-gray-200 pt-2 text-xs font-bold text-gray-700">
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
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">{tx.title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{tx.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label={tx.close}
          >
            <Icon name="XMarkIcon" size={18} className="text-gray-600" />
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
                  ? `bg-gradient-to-r ${step.color} text-white shadow-sm`
                  : i < currentStep
                  ? 'bg-gray-100 text-gray-500' :'bg-gray-50 text-gray-400 border border-gray-200'
              }`}
            >
              {i < currentStep && (
                <Icon name="CheckIcon" size={12} className="text-gray-500" />
              )}
              {s.tag}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 font-medium">
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
              <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
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
        <div className="h-1 bg-gray-100">
          <div
            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-400`}
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Footer navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/60">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="ChevronLeftIcon" size={16} />
            {tx.prev}
          </button>

          {isLast ? (
            <a
              href="#download"
              onClick={onClose}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${step.color} hover:opacity-90 transition-opacity shadow-md`}
            >
              <Icon name="ArrowDownTrayIcon" size={16} />
              {tx.finish}
            </a>
          ) : (
            <button
              onClick={handleNext}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${step.color} hover:opacity-90 transition-opacity shadow-md`}
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
