/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,css}"],
    theme: {
        // fontFamily: {
        //     sans: ["Roboto", "sans-serif"],
        //     body: ["Roboto", "sans-serif"],
        //     mono: ["ui-monospace", "monospace"],
        // },
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
}
