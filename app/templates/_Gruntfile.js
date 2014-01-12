// Generated on<%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';


module.exports = function(grunt) {

    grunt.initConfig({
        folders: {
            public: 'public',
            tmp: '.tmp'
        },
        deployd: {
            dev: {
                options: {
                    port: 2403,
                    db: {
                        host: 'localhost',
                        port: 27017,
                        name: 'development'
                    },
                    env: 'development'
                }
            },
            prod: {
                options: {
                    port: 2403,
                    db: {
                        port: 27017,
                        name: 'production',
                        host: 'localhost',
                        credentials: {
                            username: 'prod_user',
                            password: 'prod_pass'
                        }
                    },
                    env: 'production'
                }
            }
        },
        watch: {
            livereload: {
                <% if (angular) { %>js: {
                    files: ['<%%= folders.public %>/lib/**', '<%%= folders.public %>/app/**/*.js'],
                    tasks: ['jshint'],
                    options: {
                        livereload: true,
                    },
                },<% } %>
                files: [
                    '<%%= folders.public %>/*.html',
                    '<%%= folders.public %>/styles/{,*/}*.css',
                    '<%%= folders.public %>/script/{,*/}*.js',
                    '<%%= folders.public %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Import of plugins
//    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-deployd');

    //grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('server', function(target) {
        grunt.task.run( [
            'deployd:dev',
            'watch'
        ] );
    });
}