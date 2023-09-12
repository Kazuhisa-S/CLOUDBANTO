/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        orangered: {
          "100": "#ff5e18",
          "200": "rgba(255, 94, 24, 0.1)",
        },
        silver: "rgba(195, 195, 195, 0.2)",
        gray: {
          "100": "#0c1528",
          "200": "#111",
        },
        gainsboro: "#d4dae5",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f0f0f0",
        },
        aliceblue: "#f0f3f8",
        lightslategray: "#7e8594",
        royalblue: "#0e6dfc",
        crimson: "#ff1a51",
        lavenderblush: "#ffeff3",
        mediumseagreen: "#06b56b",
        deepskyblue: "#0eb4fc",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        "noto-sans-jp": "'Noto Sans JP'",
        inherit: "inherit",
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "21xl": "40px",
        "181xl": "200px",
        "11xl": "30px",
        "3xs": "10px",
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      "3xl": "22px",
      "5xl": "24px",
      smi: "13px",
      "13xl": "32px",
      "23xl": "42px",
      "27xl": "46px",
      "2xs": "11px",
      "3xs": "10px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
