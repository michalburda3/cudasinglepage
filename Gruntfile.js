module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'cuda.sass'
        }
      }
    },

    watch: {
      scripts: {
        files: ['cuda.sass'],
        tasks: ['sass'],
        options: {
            spawn: false
        },
      } 
    },
	
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true, 
          server: './'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};