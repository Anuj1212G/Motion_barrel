// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 10px rgba(34,197,94,0.6)" },
          "50%": { transform: "scale(1.1)", boxShadow: "0 0 25px rgba(34,197,94,0.9)" },
        },
        "bounce-glow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "bounce-glow": "bounce-glow 1.5s ease-in-out infinite, pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
