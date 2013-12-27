module.exports = function(grunt) {

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// concat
		concat: {
			// 2. Configuration for concatinating files goes here.
			dist: {
				src: ['bower_components/jquery/jquery.min.js', 'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js', 'src/js/*.js'],
				dest: 'dist/js/main.js',
			}
		},

		// uglify
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

		// imagemin
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

		// less
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
		},

		// watch
		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['src/less/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
				}
			},
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
				}
			},
			images: {
				files: ['src/img/**/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false,
				}
			}
		}

	});

	// Load plugins.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Define tasks.
	grunt.registerTask('default', ['less', 'concat', 'uglify', 'imagemin']);

};
