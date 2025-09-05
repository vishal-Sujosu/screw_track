module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0ea5e9',

					secondary: '#fcd34d',

					accent: '#e07bd6',

					neutral: '#e5e7eb',

					'base-100': '#fcfcfd',

					info: '#2751e7',

					success: '#17ab75',

					warning: '#e9ac3a',

					error: '#f9170b'
				}
			}
		]
	},
	darkMode: 'class'
};
