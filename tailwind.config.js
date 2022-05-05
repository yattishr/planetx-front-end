module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // FontFace: {
    //   'Trispace': {
    //     src: [
    //       'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    //       'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
    //     ],
    //     fontDisplay: 'swap',
    //     fontStyle: 'normal',
    //     fontWeight: '400',
    //   },
    // },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
