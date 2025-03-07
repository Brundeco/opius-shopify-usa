/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,json}"],
  theme: {
    extend: {
      colors: {
        cardTitle: "#bca053",
        opiusBeige: "#BFBBAD",
        opiusYellow: "#f2d47a",
        opiusBlue: "#76a1b4",
        opiusRed: "#a22e21",
        opiusDeepGreen: "#00272C",
        opiusAmarumAccent: "#be9617",
        OpiusAlbedoAccent: "#c5ebf4",
        OpiusNigredoAccent: "#EAFEFF",
        OpiusRubedoAccent: "#e0d4af",
      },
    },
  },
  plugins: [],
};
