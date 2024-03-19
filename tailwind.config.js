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
            white: "#FFFFFF",
            blue: {
                lightest: "#F9FCFF",
                lighter: "#C6DCF3",
                light: "#91B6DD",
                DEFAULT: "#4B759A",
                dark: "#336087",
                darker: "#2C4356",
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
        extend: {
            keyframes: {
                float1: {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-7px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
                float2: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                float3: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-3px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
              },
              animation: {
                'float1': 'float1 4s ease-in-out infinite',
                'float2': 'float2 4.5s ease-in-out infinite',
                'float3': 'float1 5s ease-in-out infinite',
              },
        },
        fontFamily: {
            sans: ["Oto Sans", ...defaultTheme.fontFamily.sans],
            display: "Oto Hand",
        },
    },
    plugins: [],
};
