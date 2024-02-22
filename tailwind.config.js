/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        colors: {
            blue: {
                lightest: "#F9FCFF",
                lighter: "#90B5DC",
                light: "#E0EEFD",
                DEFAULT: "#4A7499",
                dark: "#5783A9",
                darker: "#1B3346",
            },
            orange: {
                50: "#fef8ee",
                100: "#fdefd7",
                200: "#fadcae",
                300: "#f7c17a",
                400: "#f39d44",
                500: "#f0892e",
                600: "#e06716",
                700: "#ba4e14",
                800: "#943e18",
                900: "#773517",
                950: "#40180a",
                DEFAULT: "#f0892e",
            },
            dropShadow: {
                xl: "10px 14px 24px 0px rgba(7, 33, 60, 0.22)",
            },
        },
        extend: {},
        fontFamily: {
            sans: ["Oto Sans", ...defaultTheme.fontFamily.sans],
            display: "Oto Hand",
        },
    },
    plugins: [],
};
