module.exports = function(grunt) {

	require('load-grunt-config')(grunt, {
		data: {
			sitePath: {
				dest: './public/assets',
				src: './src/assets',
			},
			vendorPath: './node_modules'
		}
	});
};