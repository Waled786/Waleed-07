/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        primary: '#2563EB',
        secondary: '#0F172A',
        accent: '#38BDF8',
        card: '#FFFFFF',
        ink: '#1E293B',
        muted: '#64748B',
        border: '#E2E8F0',
        hover: '#DBEAFE',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1280px',
        prose: '700px',
      },
      borderRadius: {
        card: '28px',
      },
      spacing: {
        '18': '4.5rem',
        section: '140px',
        'section-sm': '100px',
        'section-xs': '80px',
        'edge': '80px',
        'edge-sm': '48px',
        'edge-xs': '24px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)',
        lift: '0 12px 40px rgba(15,23,42,0.08), 0 2px 8px rgba(15,23,42,0.04)',
        glow: '0 20px 60px rgba(37,99,235,0.18)',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(40px,-30px) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(18px)', opacity: '0' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        scrollDot: 'scrollDot 1.8s ease-in-out infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
};
