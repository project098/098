module.exports = function (grunt) {
    grunt.initConfig({
        // Linting
        jshint: {
            files: [
                '**/*.js',
                '!node_modules/**/*.js',
                '!core/libraries/**/*.js'
            ],
            options: {
                globals: {
                    document: true,
                    jQuery: true,
                    angular: true,
                    require: true
                }
            }
        },

        // Build LESS
        less: {
            development: {
                files: {
                    '../build/css/styles.css': './less/styles.less'
                }
            }
        },

        // Run tasks when files change
        watch: {
            jshint: {
                files: '**/*.js',
                tasks: ['newer:jshint'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: './less/*.less',
                tasks: ['newer:less'],
                options: {
                    // don't reload since the css files changes are monitored
                }
            },
            css: {
                files: '../build/css/*.css',
                options: {
                    livereload: true
                }
            },
            html: {
                files: '../build/*.html',
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            uses_defaults: {}
        }
    });

    // Load the tasks
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Speficty the default task
    grunt.registerTask('default', ['jshint', 'less']);
    grunt.registerTask('server', ['connect', 'watch']);
};
