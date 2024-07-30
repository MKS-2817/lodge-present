/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fontSize_8': '8pt',
        'fontSize_10': '10pt',
        'fontSize_12': '12pt',
        'fontSize_14': '14pt',
        'fontSize_16': '16pt',
        'fontSize_18': '18pt',
        'fontSize_20': '20pt',
        'fontSize_22': '22pt',
        'fontSize_24': '24pt',
        'fontSize_26': '26pt',
        'fontSize_28': '28pt',
      },

      colors: {
        // #212121
        'background_color': '#1E1939',
        'navbar_color': '#0C3239',
        "button": '#F86E4F',
        'ring_color': '#F86E4F',
        'backButton': '#C77749',
        'card_color': '#facc15',
        'text_color': '#21BF5B',
        'card_text' : '#1E1939',
        'input_color': '#4D4F77',
        /////////////////////////////////////////////////
        'FB8C00_color': '#FB8C00',
        '006A6A_color': '#006A6A',
        '7b1fa2_color': '#7b1fa2',


      },
    },
  },
  plugins: [],
};
