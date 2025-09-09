
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			blue: {
				light: '#85d7ff',
				default: '#1fb6ff',
				dark: '#009eeb',
				darkest: '#0a558cff'
			},
			pink: {
				light: '#ff7ce5',
				DEFAULT: '#ff49db',
				dark: '#ff16d1',
				darkest: '#e40a39ff'
			},
			gray: {
				dark: '#3c4858',
				darkest: '#1f2d3d',
				DEFAULT: '#c0ccda',
				light: '#e0e6ed',
				lightest: '#f9fafc'
			},
			amber: {
				400: '#fbbf24',
			},
			white: '#ffffff',
			black: '#000000',
			red :{
				dark: '#f9170b',
				darkest: '#7f1d1d',
				DEFAULT: '#dc2626',
				light: '#f87171',
				lightest: '#fee2e2'

			},
			green:{
				dark: '#15803d',
				darkest: '#064e3b',
				DEFAULT: '#22c55e',
				light: '#4ade80',
				lightest: '#d1fae5'
			},
			indigo:{
				dark: '#4338ca',
				darkest: '#312e81',

				DEFAULT: '#6366f1',
				light: '#818cf8',
				lightest: '#e0e7ff'
			},
			yellow:{
				dark: '#b45309',
				darkest: '#78350f',	
				DEFAULT: '#f59e0b',
				light: '#fbbf24',
				lightest: '#fef3c7'
			},
			purple:{
				dark: '#7e22ce',
				darkest: '#4c1d95',		
				DEFAULT: '#a855f7',
				light: '#c084fc',
				lightest: '#c7bef1ff'
			},
		}
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
