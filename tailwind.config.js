const defaultTheme = require('tailwindcss/defaultTheme');
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        //sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        //mono: ['"Fira Code"', ...fontFamily.mono],
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Serif', ...defaultTheme.fontFamily.serif],
        mono: ['DM Mono', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono]
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: '640px',
        'demo-sm': '720px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        'c7o-strobe': '#78FBBC',
        'c7o-strobe-light': '#ECFEF5',
        'c7o-strobe-hover': '#74D3A6',
        'c7o-night-rider': '#010617',
        'c7o-purple': '#7A4EBF', // background: ;
        'c7o-purple-dark': '#7C3AED',
        'c7o-purple-darker': '#3D1C6E',
        'c7o-purple-light': '#D8C1FE'
      },
    },
  },
  plugins: [],
};
