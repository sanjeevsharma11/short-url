module.exports = {
	apps: [
		{
			name: 'shortUrlServer',
			script: './build/src/app.js',
			watch: false,
			node_args: [
				'-r',
				'./node_modules/dotenv/config',
				'--experimental-modules',
				'--experimental-json-modules',
			],
			timestamp: 'HH:mm Z DD-MM-YYYY',
			ignore_watch: ['node_modules'],
		},
	],
};
