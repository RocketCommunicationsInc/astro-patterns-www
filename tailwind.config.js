module.exports = {
	purge: {
	  enabled: process.env.NODE_ENV === 'production',
	  content: [
		'./docs/.vitepress/**/*.js',
		'./docs/.vitepress/**/*.vue',
		'./docs/.vitepress/**/**/*.vue',
		'./docs/.vitepress/**/*.ts',
		'./docs/**/*.md',
	  ],
	  options: {
		safelist: ['html', 'body'],
	  },
	},
  }