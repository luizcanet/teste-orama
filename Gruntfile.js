module.exports = function (grunt) {
  grunt.initConfig({
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'styles/*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    'dart-sass': {
      target: {
        options: {
          includePaths: ['node_modules/foundation-sites/scss']
        },
        files: {
          'styles/main.css': 'src/styles/main.scss'
        }
      }
    },
    watch: {
      files: 'src/styles/**/*.scss',
      tasks: ['dart-sass']
    }
  })

  // load npm tasks
  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-dart-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch'])
}
