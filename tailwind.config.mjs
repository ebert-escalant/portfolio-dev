import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto Condensed Variable', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
				'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
          			to: { transform: 'translateX(-100%)' },
				},
				'infinite-scroll-reverse': {
					from: { transform: 'translateX(-100%)' },
		  			to: { transform: 'translateX(0)' },
				}
			}
		},
	},
	plugins: [],
}
