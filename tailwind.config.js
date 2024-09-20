/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				arialRounded: ['arialRounded', 'sans-serif'],
				arialRoundedBold: ['arialRoundedBold', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
