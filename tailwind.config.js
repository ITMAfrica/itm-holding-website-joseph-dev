const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  purge: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue_side_bar: '#56CCF2',
        blue_itm_2: '#20C4F4',
        blue_itm_good: '#1238B9',
        blue_itm_primary: '#1238B9',
        blue_itm_secondary: '#00AEEF',
        blue_itm_aqua_marine: '#29BDBC',
        blue_itm_title_blue: '#1238B9',
        blue_itm_contact: '#2E5DF8',
        blue_itm_linear: '#2A4296',
        light_blue_gray: '#EFF2FC',
        rose_itm: '#FF5789',
        black_itm: '#353535',
        gray_itm: '#CCCCCC',
        bg_itm: '#F2F2F2',
        white_itm: '#FAF9FF',
        gray_itm_bg: '#C2C0FF',
        gray_800: '#454545',
        yelloweItm: '#F2B61D',
      },
      boxShadow: {
        headerShadow: '0 5px 18px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
