module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440 px) 2k displays.
      "3xl": "1920px",
      // => @media (min-width: 1920 px)  (for larger 2K displays and some 3K displays).
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "4.5rem",
      "7.5xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        dinNext: ["var(--font-dinNext)"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        "josefin-semibold": "var(--font-josefin-semibold)",
      },
      colors: {
        primary: {
          100: "#E6F6FE",
          200: "#C0EAFC",
          300: "#9ADDFB",
          400: "#4FC3F7",
          500: "#03A9F4",
          600: "#0398DC",
          700: "#026592",
          800: "#014C6E",
          900: "#013349",
          blue: "var(--blue)",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        background: {
          primary: "#eeeeee",
          footer: "#272727",
          card: "#f2f2f2",
        },
      },
      lineHeight: {
        hero: "4.5rem",
      },
      gridTemplateColumns: {
        // Simple 14 column grid
        14: "repeat(14, minmax(0, 1fr))",
      },
      keyframes: {
        ping: {
          // "0%": { transform: "scale(1)", opacity: "1" },

          "75%, 100%": { transform: "scale(1.2)", opacity: "0" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            // animation-timing-function: cubic-bezier(0.8, 0, 1, 1)
          },
          "50%": {
            transform: "translateX(0)",
            // animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
          },
        },
      },
    },
    textColor: {
      primary: "var(--blue)",
      secondary: "#dadada",
      faded_black: "#4a5568",
      heading: "#2b2b2b",
      white: "#fff",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

//  SECTION 2 SECTION DISANCE -110PX
// TITLE TO SECTION DISTANCE -70PX
