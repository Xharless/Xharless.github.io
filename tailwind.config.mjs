/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#9333EA',
          light: '#A855F7',
          dark: '#7E22CE',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blur-in': 'blurIn 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.92)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          'from': { opacity: '0.5', backdropFilter: 'blur(10px)' },
          'to': { opacity: '1', backdropFilter: 'blur(0px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          WebkitBackdropFilter: 'blur(24px)',
        },
      });
    },
  ],
};
