module.exports = {
	dist: {
		files: {
			'<%= sitePath.dest %>/js/script.min.js': ['<%= sitePath.dest %>/js/script.js']
		}
	}
};