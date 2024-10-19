/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyText: "rgba(28, 28, 28, 0.4)",
        lightGreyText: "rgba(28, 28, 28, 0.2)",
        blackTheme: "rgba(255, 255, 255, 0.1)",
        tableBg:"rgba(247, 249, 251, 1)"
      },
    },
  },
  plugins: [],
};
