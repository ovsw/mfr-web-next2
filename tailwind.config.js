const defaultTheme = require("tailwindcss/defaultTheme")

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgb(var(${variableName})`
    }
  }
}

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`
    } else {
      return `rgb(var(${variableName})`
    }
  }
}

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
const rem = px => `${round(px / 16)}rem`

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      // sans: ["Geomanist", "sans-serif"],
      sans: [
        // "gilroy",
        "acumin-pro",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      // serif: ["americane"],
      // serif: ["gilroy"],
      serif: ["acumin-pro"],
      condensed: ["acumin-pro-condensed"],
      extraCondensed: ["acumin-pro-extra-condensed"],
      // cursive: ["fave-script-pro", "cursive"],
      cursive: ["Kalam", "cursive"],
      systemsans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      boxShadow: {
        focus: "#CC081C 0px 0px 3pt 2pt",
      },
      colors: {
        //primary: "#00764F",
        // accent: "rgba(224, 0, 51, 1)",
        primary: {
          DEFAULT: "#00764F",
          50: "#EBFFEB",
          100: "#D6FFDA",
          200: "#B6FEB4",
          300: "#8CFF8A",
          400: "#00B375",
          500: "#00764F",
          600: "#006243",
          700: "#004D37",
          800: "#003929",
          900: "#00241B",
        },
        accent: {
          DEFAULT: "#CC083E",
          50: "#FEE9EC",
          100: "#FDCCD3",
          200: "#FB91A1",
          300: "#F8566E",
          400: "#F61B4B",
          500: "#CC081C",
          600: "#AF0726",
          700: "#91062D",
          800: "#740523",
          900: "#56031A",
        },
        tertiary: {
          DEFAULT: "#FEF7C1",
          0: "#FAF7EA",
          50: "#FFFFFF",
          100: "#FFFFFD",
          200: "#FFFDEE",
          300: "#FEFBDF",
          400: "#FEF9D0",
          500: "#FEF7C1",
          600: "#FDF29E",
          700: "#FDEE7B",
          800: "#FCE958",
          900: "#FCE534",
        },
      },
      textColor: {
        theme: {
          offWhite: "#FAF7EA",
          base: "#363232",
          body: "#707070",
          muted: "#707070",
          inverted: "#ffffff",
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
        },
      },
      backgroundColor: {
        themeButton: {
          primary: {
            DEFAULT: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "rgba(224, 0, 51, 1)",
            hover: "rgba(224, 0, 51, 1)",
          },
        },
        themeFill: {
          DEFAULT: "#FFFFFF",
          white: "#FFFFFF",
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
          offWhite: "#FAF7EA",
          tertiary: "#FEF7C1",
        },
      },
      borderColor: {
        theme: {
          primary: {
            base: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "rgba(224, 0, 51, 1)",
            hover: "rgba(224, 0, 51, 1)",
          },
        },
      },
      fill: {
        theme: {
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
          white: "#FFFFFF",
          offWhite: "#FAF7EA",
          muslin: "transparent",
        },
      },
      typography: theme => ({
        "3xl": {
          css: {
            fontSize: rem(28),
            lineHeight: round(40 / 28),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
