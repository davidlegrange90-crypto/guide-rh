export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { ink: '#1a1a1a', accent: '#1d4ed8', muted: '#6b7280', line: '#e5e7eb', paper: '#fafaf9' },
    },
  },
  plugins: [],
};
