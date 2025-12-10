/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // IMPORTANT: Prevent Vercel from purging dark: utilities
  safelist: [
    { pattern: /dark:/ },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
