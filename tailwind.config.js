/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background:  { DEFAULT: 'var(--background)' },
        foreground:  { DEFAULT: 'var(--foreground)' },
        primary:     { DEFAULT: 'var(--primary)',     foreground: 'var(--primary-foreground)' },
        secondary:   { DEFAULT: 'var(--secondary)',   foreground: 'var(--secondary-foreground)' },
        accent:      { DEFAULT: 'var(--accent)',      foreground: 'var(--accent-foreground)' },
        muted:       { DEFAULT: 'var(--muted)',       foreground: 'var(--muted-foreground)' },
        card:        { DEFAULT: 'var(--card)',         foreground: 'var(--card-foreground)' },
        border:      { DEFAULT: 'var(--border)' },
        input:       { DEFAULT: 'var(--input)' },
        ring:        { DEFAULT: 'var(--ring)' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:  'calc(var(--radius) * 0.5)',
        md:  'calc(var(--radius) * 0.75)',
        lg:  'var(--radius)',
        xl:  'calc(var(--radius) * 1.5)',
        '2xl': 'calc(var(--radius) * 2)',
        '3xl': 'calc(var(--radius) * 3)',
        '4xl': 'calc(var(--radius) * 4)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      animation: {
        'float-phone':  'floatPhone 5s ease-in-out infinite',
        'morph':        'morphBlob 8s ease-in-out infinite',
        'pulse-ring':   'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-slide':   'fadeSlideIn 0.8s ease-out forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};