export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    { pattern: /dark:/ },  // <--- force Tailwind to keep dark: classes
  ],
};
