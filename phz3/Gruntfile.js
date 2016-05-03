module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    config: {
      app: 'app',
      dev: 'dev',
      dist: 'dist'
    },

    clean: {
      dist: {
        files: [{
            dot: true,
            src: [
                'dev',
                '.sass-cache',
                'dist'
            ]
        }]
      }
    }, // end clean

    swig: {
      development: {
        init: {
            root: "<%= config.app %>/templates/pages/",
            allowErrors: false,
            autoescape: true
        },
        cwd: "<%= config.app %>/templates/pages/",
        src: ['**/*.swig'],
        dest: "<%= config.dev %>/",
        generateSitemap: true,
        generateRobotstxt: true,
        siteUrl: 'http://mydomain.net/',
        production: false,
        fb_appid: '1349v',
        ga_account_id: 'UA-xxxxxxxx-1',
        robots_directive: 'Disallow /',
        sitemap_priorities: {
            '_DEFAULT_': '0.5',
            'index': '0.8',
            'subpage': '0.7'
        }
      }
    }, // end swig

    sass: {                          
      dist: {                       
        options: {                      
          style: 'expanded'
        },
        files: {                         
          '<%= config.dev %>/assets/css/styles.css': '<%= config.app %>/assets/css/styles.scss'
        }
      }
    }, // end sass

    autoprefixer: {
        options: {
          browsers: ['last 1 version', '> 1%']
        },
        files: {
          expand: true,
          cwd: '<%= config.dev %>/assets/css/',
          src: '{,*/}*.css',
          dest: '<%= config.dev %>/assets/css/'
        }
    }, // end autoprefixer

    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: false
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/',
          src: '*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/assets/css/',
          src: '*.css',
          dest: '<%= config.dist %>/assets/css/'
        }]
      }
    },

    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/assets/js/',
          src: '*.js',
          dest: '<%= config.dist %>/assets/js/'
        }]
      }
    }, // end uglify

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 1
        },
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/assets/css/assets/**/',
          src: ['**/*.{png,jpg}'],
          dest: '<%= config.dist %>/assets/css/assets/img/'
        }, {
          expand: true,
          cwd: '<%= config.dev %>/assets/img/',
          src: ['**/*.{png,jpg}'],
          dest: '<%= config.dist %>/assets/img/'
        }]
      }
    }, // end imagemin

    svgmin: {
      inline: {
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/assets/img',
          src: '**/*.svg',
          dest: '<%= config.dist %>/assets/img'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/assets/css/assets/img',
          src: '**/*.svg',
          dest: '<%= config.dist %>/assets/css/assets/img'
        }]
      },
    }, // end svgmin


    copy: {
      dev: {
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dev %>',
          src: [
            'assets/{css,img}/**/*.{gif,jpeg,jpg,png,svg,eot,ttf,woff,ico}',
            'assets/js/**/*.js',
            'CNAME'
          ]
      }, // end copy-dev
      dist: {
          expand: true,
          dot: true,
          cwd: '<%= config.dev %>',
          dest: '<%= config.dist %>',
          src: [
            '{,*/}*.{html,txt,xml}',
            'assets/css/**/*.{svg,eot,ttf,woff,ico}',
            'CNAME'
          ]
      } // end copy-dist
    }, // end copy

    useminPrepare: {
        html: ['<%= config.dist %>/index.html']
    }, // end usemin prepare

    usemin: {
        html: ['<%= config.dist %>/index.html'],
        css: ['<%= config.dist %>/assets/css/*.css'],
    }, // end usemin

    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/assets/css/{,*/}*.css',
            '<%= config.dist %>/assets/js/**/*.js',
            '<%= config.dist %>/assets/{css,img}/**/*.{gif,jpeg,jpg,png,svg,eot,ttf,woff,ico}'
          ]
        }
      }
    },

    connect: {
      options: {
        port: 8000,
        livereload: true,
        hostname: '*'
      },
      dev: {
        options: {
          base: 'dev'
        }
      },
      dist: {
        options: {
          base: 'dist',
          livereload: false
        }
      }
    }, // end connect

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '<%= config.app %>/templates/**/*.{swig,json}',
        tasks: ['swig',]
      },
      css: {
        files: '<%= config.app %>/assets/css/**/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: '<%= config.app %>/assets/js/*.js',
        tasks: 'copy:js'
      },
      img: {
        files: '<%= config.app %>/assets/img/**/**/*.{gif,jpeg,jpg,png,svg,eot,ttf,woff,ico}',
        tasks: ['sass', 'autoprefixer']
      },
      gruntfile: {
        files: ['gruntfile.js']
      }
    }, // end watch

    'gh-pages': {
      options: {
        base: '<%= config.dist %>',
        add: false
      },
      src: '**/*'
    }

  });

  // Load the plugin that provides the "uglify" task.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s)
  grunt.registerTask('dev', function() { //dev build
    grunt.task.run([
        'clean',
        'swig',
        'sass',
        'autoprefixer',
        'copy:dev',
        'connect:dev',
        'watch'
      ]);
  });
  grunt.registerTask('dist', function() { // dist build
    grunt.task.run([
        'build',
        'connect:dist',
        'watch'
      ]);
  });
  grunt.registerTask('publish', function() { // dist build + publish to gh-pages
    grunt.task.run([
        'build',
        'gh-pages'
      ]);
  });

  grunt.registerTask('build', function() {
    grunt.task.run([
        'clean',
        'swig',
        'sass',
        'autoprefixer',
        'useminPrepare',
        'copy:dev',
        'copy:dist',
        'cssmin',
        'uglify',
        'imagemin',
        'svgmin',
        'rev',
        'usemin',
        'htmlmin',
      ]);
  });

};