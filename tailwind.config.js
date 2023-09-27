module.exports = {
	content: [
		'./docs/.vitepress/**/*.js',
		'./docs/.vitepress/**/*.vue',
		'./docs/.vitepress/**/**/*.vue',
		'./docs/.vitepress/**/*.ts',
		'./docs/.vitepress/components/*.vue',
		'./docs/**/*.md',
		'./docs/*.md',
	],
	important: true,
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	],
}