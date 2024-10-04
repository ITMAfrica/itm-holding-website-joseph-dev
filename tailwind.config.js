const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        'semi-lg': '990px',
        lg: '1280px',
        xl: '1440px',
      },
      colors: {
        blue_itm_good: '#1238B9',
        blue_itm_primary: '#1238B9',
        blue_itm_secondary: '#00AEEF',
        blue_itm_aqua_marine: '#29BDBC',
        blue_itm_title_blue: '#1238B9',
        blue_itm_linear: '#2A4296',
        black_itm: '#353535',
        black_footer: '#262626',
        bg_itm: '#F2F2F2',
        white_itm: '#FAF9FF',
        gray_itm: '#8492A7',
        gray_itm_bg: '#C2C0FF',
        gray_800: '#454545',
        yelloweItm: '#F2B61D',
        grey: {
          '0a': '#0a0a0a',
          1: '#111111',
          2: '#222222',
          3: '#333333',
          4: '#444444',
          5: '#555555',
          6: '#666666',
          7: '#777777',
          8: '#888888',
          9: '#999999',
          12: '#121212',
          15: '#151515',
          b: '#bbbbbb',
          d: '#dddddd',
          ea: '#eaeaea',
          fb: '#fbfbfb',
        },
      },
      boxShadow: {
        headerShadow: '0 5px 18px -15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        xxs: '10px',
      },
      animation: {
        'slow-display': 'trans 2s linear',
        'scroll-animation': 'headerAnim 0.4s linear',
      },
      keyframes: {
        trans: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        headerAnim: {
          '0%': { padding: '1rem' },
          '100%': { padding: '0' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#2E5DF8 transparent',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '3px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#C2C0FF',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#2E5DF8',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },
        '.scrollbar-webkit-md': {
          '&::-webkit-scrollbar': {
            width: '7px',
            marginLeft: '5px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#2E5DF8',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
