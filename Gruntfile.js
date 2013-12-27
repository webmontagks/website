module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			// 2. Configuration for concatinating files goes here.
			dist: {
				src: ['bower_components/jquery/jquery.min.js', 'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js', 'src/js/*.js'],
				dest: 'dist/js/main.js',
			}
		},

		uglify: {
			options: {
				// preserveComments: 'some'
				// sourceMap: 'dist/main.min.map'
			},
			dist: {
				src: 'dist/js/main.js',
				dest: 'dist/js/main.min.js'
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/img/'
				}]
			}
		},

		less: {
			development: {
				options: {
					paths: ["assets/css"]
				},
				files: {
					"dist/css/main.css": "src/less/main.less"
				}
			},
			production: {
				options: {
					paths: ["assets/css"],
					cleancss: true
				},
				files: {
					"dist/css/main.min.css": "src/less/main.less"
				}
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['less', 'concat', 'uglify', 'imagemin']);

};
