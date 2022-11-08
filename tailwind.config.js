module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      aulire: ['Aulire-Regular', 'sans-serif'],
    },
    screens: {
      sm: { min: '200px', max: '700px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      lg: { min: '701px', max: '1281px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1282px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        ss_primary: '#23B1EC',
        ss_black: '#001923',
        ss_grey: '#9A9A9A',
        ss_white: '#F5F6F6',
        ss_white2: '#FFFFFF',
        ss_alert__danger: 'red',
        ss_old_grey: '#393939',
      },
    },
  },
  plugins: [],
};
