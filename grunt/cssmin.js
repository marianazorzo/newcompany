module.exports = {
	target: {
		files: {
			'<%= sitePath.dest %>/css/main.min.css': ['<%= sitePath.dest %>/css/main.css']
		}
	}
};