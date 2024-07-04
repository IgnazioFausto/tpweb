/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "/node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker/dist/**/*.js",
    "./pages/**/*.{ts,tsx}", "./public/**/*.html",
    "./node_modules/@nextui-org/theme/dist/components/spinner.js",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      listStyleImage: {
        checkmark: 'url("/imgs/logo.png")',
      },
      fontFamily: {
        'sans': ['Proxima Nova', 'Arial', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
  },
  plugins: [require("flowbite/plugin"),nextui()],
};
