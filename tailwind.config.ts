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
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: "rgb(var(--card))",
        "card-foreground": "rgb(var(--card-foreground))",
        popover: "rgb(var(--popover))",
        "popover-foreground": "rgb(var(--popover-foreground))",
        primary: "rgb(var(--primary))",
        "primary-foreground": "rgb(var(--primary-foreground))",
        secondary: "rgb(var(--secondary))",
        "secondary-foreground": "rgb(var(--secondary-foreground))",
        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        accent: "rgb(var(--accent))",
        "accent-foreground": "rgb(var(--accent-foreground))",
        border: "rgb(var(--border))",
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
    },
  },
  plugins: [],
} satisfies Config;