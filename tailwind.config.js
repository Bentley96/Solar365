/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040e1f',
          900: '#0a1f3d',
          800: '#0e2c55',
          700: '#14396d',
          600: '#1b4a8a',
          500: '#235fa8',
          400: '#3578c4',
          300: '#5e9ad8',
          200: '#9ec2ea',
          100: '#d0e4f6',
          50:  '#eaf3fc',
        },
        solar: {
          700: '#c49100',
          600: '#d9a200',
          500: '#faba20',
          400: '#fbc740',
          300: '#fcd468',
          200: '#fde49e',
          100: '#fef3d0',
          50:  '#fffaec',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
