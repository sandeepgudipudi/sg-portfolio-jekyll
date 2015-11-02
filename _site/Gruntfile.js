'use strict';
module.exports = function(grunt) {
	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);
	//init
	grunt.initConfig({

		// grunt-express will serve the files from the folders listed in `bases`
		// on specified `port` and `hostname`
		express : {
			all : {
				options : {
					port : 9000,
					livereload : true,
					bases : ['./app']
				}
			}
		},
		// grunt-watch will monitor the projects files
		watch : {
			all : {
				files:'./app/index.html',
				options : {
					livereload : true
				}
			}
		}, // grunt-open will open your browser at the project's URL
		open : {
			all : {
				// Gets the port from the connect configuration
				path : 'http://localhost:<%= express.all.options.port%>'
			}
		}
	});

	// Creates the `server` task
	grunt.registerTask('server', ['express', 'open', 'watch']);
};
