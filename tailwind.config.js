/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'badge-pop': {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.08)', boxShadow: '0 0 0 4px rgba(251,146,60,0.35)' },
          '100%': { transform: 'scale(1)', boxShadow: 'none' },
        },
      },
      animation: {
        'badge-pop': 'badge-pop 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
