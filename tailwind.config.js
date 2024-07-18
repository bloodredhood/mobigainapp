/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'b-black': '#2D2F30',
				'b-gray-46': '#464848',
				'b-white-fd': '#FDFAFA',
				'b-white-f3': '#F3F1F1',
				'b-white-ee': '#EEF8F9',
				'b-gray-92': '#929292',
				blue: '#3C88F5',
				green: '#59C280',
				red: '#F9877F',
				'd-bg': '#2D2F30',
				'd-footer': '#5B5B5B',
				'd-gray': '#393A3A',
			},
			fontFamily: {
				sans: ['Ubuntu', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
