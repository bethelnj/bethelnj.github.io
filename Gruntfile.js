module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                src: 'global.scss',
                dest: 'dist/global.css'
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};