export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        brandDark: '#111827',
        mdorange: '#f97316',
        mdorangeDark: '#ea580c',
        mdgold: '#ffd400',
        mdgray: '#111827',
        mdmuted: '#64748b',
      },
      backgroundImage: {
        'md-gradient': 'linear-gradient(135deg, #f97316 0%, #ffd400 100%)',
        'md-subtle': 'linear-gradient(180deg, rgba(249, 115, 22, 0.08), transparent 60%)',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
        premium: '0 10px 30px rgba(16, 24, 40, 0.12), inset 0 1px 0 rgba(255,255,255,0.02)',
        card: '0 18px 40px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        '4xl': '28px',
        '3xl': '20px',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
