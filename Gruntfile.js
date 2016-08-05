module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'public/scripts/*.js', 'routes/*.js']
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint']
    },
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          {expand: true, cwd: 'node_modules', src: ['angular/**', 'angular-route/**'], dest: 'public/vendor/'},
        ],
      },
    },
    uglify: {
     my_target: {
      //  options: {
      //    mangle: false
      //  },
       files: {
         'public/assets/client.min.js': ['client/kickApp.module.js', 'client/kickApp.config.js', 'client/MainController.js', 'client/LoginController.js', 'client/RegisterController.js', 'client/DashboardController.js', 'client/GameController.js', 'client/ContinueController.js']
       }
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'watch']);

};
