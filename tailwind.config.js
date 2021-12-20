module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "var(--colors-gray-100)",
          200: "var(--colors-gray-200)",
          300: "var(--colors-gray-300)",
          400: "var(--colors-gray-400)",
          500: "var(--colors-gray-500)",
          600: "var(--colors-gray-600)",
          700: "var(--colors-gray-700)",
          800: "var(--colors-gray-800)",
          900: "var(--colors-gray-900)",
          1000: "var(--colors-gray-1000)",
          1100: "var(--colors-gray-1100)",
          1200: "var(--colors-gray-1200)",
        },
      },
    },
    backgroundImage: {
      "gradient-radial":
        "radial-gradient(var(--colors-gray-500) 0.5px, transparent 0.5px), radial-graident(var(--colors-gray-500) 0.5px, var(--colors-gray-1200) 0.5px)",
    },
    screens: {
      sm: "750px",
      md: "1100px",
      lg: "1500px",
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "40px",
      8: "48px",
      9: "64px",
      10: "80px",
      11: "96px",
      12: "160px",
      13: "192px",
      14: "224px",
      15: "256px",
      16: "320px",
      17: "384px",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
