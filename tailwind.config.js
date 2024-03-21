/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.js", "./resources/**/*.vue"],
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
            red: "#CD1421",
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
                    '50%': { transform: 'translateY(-4px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                slideDown: {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                slideUp: {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                float1: "float1 4s ease-in-out infinite",
                float2: "float2 4.2s ease-in-out infinite",
                float3: "float3 4.5s ease-in-out infinite",
                slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
        },
        fontFamily: {
            sans: ["Oto Sans", ...defaultTheme.fontFamily.sans],
            display: "Oto Hand",
        },
    },
    plugins: [],
};
