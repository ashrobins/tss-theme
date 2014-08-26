module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
           dist: {
             src: [
               'js/build/*.js' // All JS in the libs folder
             ],
             dest: 'js/production.js',
              }
        },
      uglify: {
        build: {
          src: 'js/build/production.js',
          dest: 'js/build/production.min.js'
      }
      },
      watch: {
        scripts: {
          files: ['js/build/*.js'],
          tasks: ['concat', 'uglify'],
          options: {
              spawn: false,
          }
        },
        css: {
          files: ['**/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
            livereload: true,
            }
        }
      },
      sass: {
        dist: {
          options: {
            style: 'compressed'
            },
          files: {
            'style.css': 'css/style.scss'
          }
        }
      }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);


};
