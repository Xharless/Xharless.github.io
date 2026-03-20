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
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float-subtle': 'floatSubtle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(10, 132, 255, 0.5)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
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
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.glass-dark': {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      });
    },
  ],
}
