module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skin: {
          main: "var(--color-text-main)",
          secondary: "var(--color-text-secondary)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          white: "var(--color-text-white)",
          dark_main_bg: "var(--dark-main-bg)",
          dark_secondary_bg: "var(--dark-secondary-bg)",
          dark_text: 'var(--dark-text-color)',
          dark_text_muted: 'var(--dark-text-muted)'
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
