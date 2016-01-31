module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['static/style/*.less'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                files: {
                    "static/style/all.css": "static/style/all.less"
                }
            }
        },
        nodemon: {
            development: {
                script: 'app.js',
                options: {
                    args: ['dev'],
                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                          console.log(event.colour);
                        });
                    },
                    env: {
                        PORT: '3000'
                    },
                    cwd: __dirname,
                    ignore: ['node_modules/**'],
                    ext: 'js',
                    watch: ['./'],
                    delay: 1000
                }
            }
        },
        concurrent: {
            target: {
                tasks: ['nodemon', 'watch', 'less']
            },
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.option('force', true);


    grunt.registerTask('default', ['concurrent']);
};