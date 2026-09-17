/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#eff3ff',
          100: '#dbe4fe',
          200: '#bfcefe',
          300: '#93aafd',
          400: '#6078fa',
          500: '#3b4ef5',
          600: '#1e2a8f',
          700: '#152070',
          800: '#0f1a5c',
          900: '#0a1142',
          950: '#060a2e'
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          150: '#eaeff5',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        'jakarta': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}
