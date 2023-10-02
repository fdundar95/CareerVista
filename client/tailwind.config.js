/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      primary: ['Roboto Condensed', 'sans-serif'],
      secondary: ['Cabin', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: 'hsl(180, 41%, 97%)',
          100: 'hsl(172, 53%, 89%)',
          200: 'hsl(173, 51%, 78%)',
          300: 'hsl(175, 46%, 64%)',
          400: 'hsl(176, 40%, 50%)',
          500: 'hsl(178, 48%, 44%)',
          600: 'hsl(179, 50%, 32%)',
          700: 'hsl(180, 47%, 26%)',
          800: 'hsl(180, 42%, 22%)',
          900: 'hsl(182, 36%, 19%)',
          950: 'hsl(185, 49%, 10%)',
        },
      },
      width: {
        fluid: '90vw',
        inherit: 'inherit',
      },
      maxWidth: {
        text: '40em',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
      },
      boxShadow: {
        nav: '0 1px 0px 0px rgba(0, 0, 0, 0.1)',
        sidebar: '1px 0px 0px 0px rgba(0, 0, 0, 0.1);',
      },
      minHeight: {
        page: 'calc(100vh - 6rem)',
      },
    },
  },
  plugins: [],
};
