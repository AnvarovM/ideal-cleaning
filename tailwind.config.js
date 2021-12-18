module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        skin: {
          main: "var(--color-text-main)",
          secondary: "var(--color-text-secondary)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          white: "var(--color-text-white)",
        },
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
