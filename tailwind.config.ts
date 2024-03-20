import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    /**
     * Shadcn/ui
     * @see {@url https://ui.shadcn.com/}
     */
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /**
       * Kamome
       * @see {@url https://www.figma.com/community/file/1349129545290357189/kamome-brand}
       */
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
      },
      /**
       * Shadcn/ui
       * @see {@url https://ui.shadcn.com/}
       */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        /**
         * Kamome
         * @see {@url https://www.figma.com/community/file/1349129545290357189/kamome-brand}
         */
        "kamome-green": {
          50: "hsl(var(--kamome-green-50))",
          100: "hsl(var(--kamome-green-100))",
          200: "hsl(var(--kamome-green-200))",
          300: "hsl(var(--kamome-green-300))",
          400: "hsl(var(--kamome-green-400))",
          500: "hsl(var(--kamome-green-500))",
          600: "hsl(var(--kamome-green-600))",
          700: "hsl(var(--kamome-green-700))",
          800: "hsl(var(--kamome-green-800))",
          900: "hsl(var(--kamome-green-900))",
          950: "hsl(var(--kamome-green-950))",
        },
        "kamome-gray": {
          50: "hsl(var(--kamome-gray-50))",
          100: "hsl(var(--kamome-gray-100))",
          200: "hsl(var(--kamome-gray-200))",
          300: "hsl(var(--kamome-gray-300))",
          400: "hsl(var(--kamome-gray-400))",
          500: "hsl(var(--kamome-gray-500))",
          600: "hsl(var(--kamome-gray-600))",
          700: "hsl(var(--kamome-gray-700))",
          800: "hsl(var(--kamome-gray-800))",
          900: "hsl(var(--kamome-gray-900))",
          950: "hsl(var(--kamome-gray-950))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
