import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pymio.cl'),
  title: 'Pymio — Demo de gestión para negocios chilenos',
  description: 'Explora ejemplos de documentos tributarios, ventas, inventario y registro por voz. Pymio está en desarrollo; no ingreses datos reales.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}