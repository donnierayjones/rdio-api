module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['*.js']
    },
    jasmine: {
      all: ['specrunner.html']
    },
    jshint: {
      options: {
        browser: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-task');

  // Default task.
  grunt.registerTask('default', 'lint jasmine');

};
