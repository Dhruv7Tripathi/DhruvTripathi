import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'wave': 'wave 2s infinite',
        'float-slow': 'float 20s infinite',
        'float-slower': 'floatSlow 25s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-up-delay': 'slideUp 0.8s ease-out 0.2s backwards',
        'fade-in-delay': 'fadeIn 1s ease-out 0.4s backwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out 0.6s backwards',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.8s backwards'
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(20px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(20px) translateX(-20px)' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        slideDown: {
          'from': { transform: 'translateY(-20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  safelist: [
    "bg-background",
    "text-foreground",
    // Animation classes that need to be preserved
    "animate-wave",
    "animate-float-slow",
    "animate-float-slower",
    "animate-fade-in",
    "animate-slide-down",
    "animate-slide-up",
    "animate-slide-up-delay",
    "animate-fade-in-delay",
    "animate-fade-in-up",
    "animate-fade-in-up-delay"
  ],
  plugins: [],
} satisfies Config;