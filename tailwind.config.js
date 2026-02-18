/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
        "!./node_modules/**" // exclude node_modules
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0A192F',
                    light: '#172A45',
                    dark: '#020C1B',
                },
                gold: {
                    DEFAULT: '#D4AF37', // metallic gold
                    light: '#F4D03F',
                    hover: '#C5A028',
                    dark: '#B8860B',
                },
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'fadeIn': 'fadeIn 0.5s ease-out forwards',
                'slideUp': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
