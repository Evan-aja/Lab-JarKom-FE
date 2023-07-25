/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        base: '#1090CB',
        baseDark: '#002940',
        cyan: '#0f4350',
        darkGrey: '#515151',
        grey : '#5C5C5C',
      },
      scale: {
        '101': '1.015',
      },
      opacity:{
        '35' : '0.35',
      },
      fontFamily:{
      'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#1090CB',
          'primary-focus': '#29b3f1',
        },
      },
    ],
  },
}
