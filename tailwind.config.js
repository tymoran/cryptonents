module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    safelist: [
      {
        pattern: /./ 
      },
      ]
  }
}