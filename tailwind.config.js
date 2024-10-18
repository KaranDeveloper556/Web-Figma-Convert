/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'li': '350px',
        'vsm': '480px',
        'mdLg':'830px',
        '3xl' : '1680px',
        '4xl' : '2800px'
      },
      animation: {
        'rocketAnime': 'RocketAnimeCss 5s linear infinite',
        'nftAnime': 'NftAnimeCss 5s linear infinite',
      }
    },
  },
  plugins: [],
}