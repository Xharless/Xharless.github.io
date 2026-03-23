/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta oscura inspirada en Apple
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a202c',
          900: '#111827',
          950: '#030712',
        },
        accent: {
          primary: '#0a84ff',
          secondary: '#ff2d55',
          tertiary: '#34c759',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float-subtle': 'floatSubtle 4s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'glow': 'glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blur-in': 'blurIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'liquid-morph': 'liquidMorph 3s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'sway': 'sway 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.92)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-4px) translateX(2px)' },
          '50%': { transform: 'translateY(-8px) translateX(0)' },
          '75%': { transform: 'translateY(-4px) translateX(-2px)' },
        },
        blurIn: {
          'from': {
            opacity: '0',
            filter: 'blur(10px)',
          },
          'to': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 132, 255, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(10, 132, 255, 0.45)' },
        },
        liquidMorph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '40% 60% 30% 70% / 30% 60% 70% 60%' },
          '75%': { borderRadius: '70% 30% 60% 40% / 60% 40% 30% 70%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(-2px) rotate(0deg)' },
          '50%': { transform: 'translateX(2px) rotate(0.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(10, 132, 255, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(10, 132, 255, 0)',
          },
        },
      },
      transitionTimingFunction: {
        'liquid': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      borderRadius: {
        '3xl': '24px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.backdrop-blur-xs': {
          backdropFilter: 'blur(2px)',
        },
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          WebkitBackdropFilter: 'blur(24px)',
        },
        '.glass-dark': {
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(24px)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          WebkitBackdropFilter: 'blur(24px)',
        },
        '.glass-premium': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(32px) saturate(180%)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.liquid-gradient': {
          backgroundImage: 'linear-gradient(135deg, rgba(10, 132, 255, 0.1) 0%, rgba(255, 45, 85, 0.05) 100%)',
          animation: 'liquidMorph 6s ease-in-out infinite',
        },
        '.shimmer-bg': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          backgroundSize: '1000px 100%',
          animation: 'shimmer 2.5s infinite',
        },
        '.smooth-transition': {
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.smooth-fast': {
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
      });
    },
  ],
}
