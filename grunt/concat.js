module.exports = {
    dev: {
        options: {
            separator: ';'
        },
        files: {
            '<%= sitePath.dest %>/js/script.js': [
                '<%= vendorPath %>/rellax/rellax.min.js',

                '<%= sitePath.src %>/js/popup.js',
                '<%= sitePath.src %>/js/app.js',
            ]
        }
    }
};