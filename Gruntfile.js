'use strict';

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var path = require('path');
  var appConfig = {
    app: path.resolve()
  };

  grunt.initConfig({

    //Project settings
    bughunts_lang: appConfig,

    antlr4: {
      grammar: ['<%= bughunts_lang.app %>/antlr4/BugHunts.g4'],
      jar: ['<%= bughunts_lang.app %>/antlr4/antlr-4.5-complete.jar'],
      generated_dir: ['<%= bughunts_lang.app %>/lib/compiler/generated']
    },

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    //Configure Antlr4 generation
    exec: {
      antlr: {
        command: 'echo <%= antlr4.jar %> && java -Xmx500M -cp <%= antlr4.jar %> org.antlr.v4.Tool -o <%= antlr4.generated_dir %> -Dlanguage=JavaScript <%= antlr4.grammar %>'
      }
    }
  });

  grunt.registerTask('antlr', ['exec:antlr']);
  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('default', ['antlr', 'test']);

};