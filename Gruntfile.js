module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.initConfig({
        ngdocs: {
            options: {
                scripts: [
                    '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js',
                    '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.js',
                ],
                html5Mode: false,
                dest: 'build',
                // title: 'AngularJs',
            },
            tutorial: {
                src: ['tutorials/**/*.ngdoc'],
                title: 'Tutorial',
            }
        },
        connect: {
            server: {
                options: {
                    // keepalive: true,
                    livereload: true,
                    port: 8080,
                    hostname: '*',
                    base: 'build/',
                },
            },
        },
        clean: ['build'],
        watch: {
            scripts: {
                files: ['tutorials/**/*.ngdoc'],
                tasks: ['ngdocs'],
                options: {
                    livereload: true,
                },
            },
        },
    });

    grunt.registerTask('default', ['clean', 'ngdocs', 'connect']);
    grunt.registerTask('serve', ['ngdocs', 'connect', 'watch']);
};
