export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mdorange: '#ff5b00',
        mdorangeDark: '#d94b00',
        mdgold: '#ffd400',
        mdgray: '#0f1724',
        mdmuted: '#6b7280',
      },
      backgroundImage: {
        'md-gradient': 'linear-gradient(135deg,#ff5b00 0%, #ffd400 100%)',
        'md-subtle': 'linear-gradient(180deg, rgba(255,91,0,0.04), transparent 60%)',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
        premium: '0 10px 30px rgba(16, 24, 40, 0.12), inset 0 1px 0 rgba(255,255,255,0.02)'
      },
      borderRadius: {
        '4xl': '28px',
        '3xl': '20px'
      }
    },
  },
  plugins: [],
};
