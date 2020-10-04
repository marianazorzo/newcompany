module.exports = {
	less: {
		files: [
			'<%= sitePath.src %>/less/**/*.less'
		],
		options: {
			livereload: true
		},
		tasks: ['less:dev']
	},
	js: {
		files: [
			'<%= sitePath.src %>/js/**/*.js'
		],
		options: {
			livereload: true
		},
		tasks: ['concat']
	}
};