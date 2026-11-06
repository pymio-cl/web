'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  lang: 'es' | 'en';
  onLangChange: (lang: 'es' | 'en') => void;
}

const t = {
  es: {
    features:    'Funciones',
    howItWorks:  'Cómo funciona',
    testimonials:'Testimonios',
    pricing:     'Precios',
    faq:         'Preguntas',
    about:       'Nosotros',
    contact:     'Contacto',
    download:    'Descargar Gratis',
  },
  en: {
    features:    'Features',
    howItWorks:  'How It Works',
    testimonials:'Testimonials',
    pricing:     'Pricing',
    faq:         'FAQ',
    about:       'About',
    contact:     'Contact',
    download:    'Download Free',
  },
};

export default function Header({ lang, onLangChange }: HeaderProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '#features',     label: t[lang].features },
    { href: '#how-it-works', label: t[lang].howItWorks },
    { href: '#testimonials', label: t[lang].testimonials },
    { href: '#pricing',      label: t[lang].pricing },
    { href: '#faq',          label: t[lang].faq },
    { href: '/about',        label: t[lang].about },
    { href: '/contact',      label: t[lang].contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <span className="font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Pymio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/60 bg-white/50 px-2 py-1.5 shadow-[0_10px_25px_rgba(31,47,58,0.04)] backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-full hover:bg-secondary transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-white/70 rounded-full p-1 border border-border shadow-sm backdrop-blur-sm">
              <button
                onClick={() => onLangChange('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  lang === 'es' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLangChange('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  lang === 'en' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#download"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_12px_25px_rgba(124,207,232,0.35)] hover:bg-[#9adff5] transition-all duration-300"
            >
              <Icon name="ArrowDownTrayIcon" size={16} variant="solid" />
              {t[lang].download}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col pt-24 px-6 pb-8"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col gap-1 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-semibold text-foreground hover:text-primary border-b border-border transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Lang toggle mobile */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground font-medium">Idioma / Language:</span>
            <div className="flex items-center gap-1 bg-muted rounded-full p-1 border border-border">
              <button
                onClick={() => { onLangChange('es'); }}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  lang === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => { onLangChange('en'); }}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-2xl text-base font-bold hover:bg-accent transition-colors shadow-lg"
          >
            <Icon name="ArrowDownTrayIcon" size={18} variant="solid" />
            {t[lang].download}
          </a>
        </div>
      )}
    </>
  );
}