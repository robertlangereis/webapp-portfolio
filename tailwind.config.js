const BODY_FONT_FAMILY = ['Roboto', 'Orgon', 'sans-serif'];

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			sans: BODY_FONT_FAMILY,
			body: BODY_FONT_FAMILY,
			titles: ['Orgon', 'Roboto', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				sans: [
					'"Inter"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [],
}
