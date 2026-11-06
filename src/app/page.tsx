'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTABannerSection from './components/CTABannerSection';

export default function HomePage() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onLangChange={setLang} />

      <main>
        <HeroSection lang={lang} />
        <FeaturesSection lang={lang} />
        <HowItWorksSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <PricingSection lang={lang} />
        <FAQSection lang={lang} />
        <CTABannerSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}