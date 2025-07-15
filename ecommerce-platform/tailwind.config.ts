import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "bounce-in": {
          "0%": {
            transform: "scale(0.3)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer": "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(0, 123, 255, 0.15)",
        "glow-lg": "0 0 40px rgba(0, 123, 255, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(0, 123, 255, 0.1)",
      },
      screens: {
        "xs": "475px",
        "3xl": "1680px",
        "4xl": "2000px",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "4/3": "4 / 3",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Дополнительные плагины для e-commerce
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.backdrop-blur-glass': {
          'backdrop-filter': 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.7)',
        },
        '.dark .backdrop-blur-glass': {
          background: 'rgba(0, 0, 0, 0.7)',
        },
        '.container': {
          '@apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        '.btn-focus': {
          '@apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2': {},
        },
        '.input-focus': {
          '@apply focus:border-primary focus:ring-2 focus:ring-primary/20': {},
        },
        '.card-hover': {
          '@apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1': {},
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config;