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
        files: ['**/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false
        },
    } 
  }
	

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);

};