'use strict';

var dir = {
  src: './src/',
  dest: 'dist/'
}

module.exports = {

  sitemap: {
    src: dir.dest + '**/*.html',
    dest: dir.dest,
    url: 'http://www.sitename.com'
  },//end sitemap

  clean: {
    dest: dir.dest
  },//end clean

  swig: {
    src: dir.src + 'templates/pages/**/*.swig',
    dest: dir.dest,
    data: '../src/templates/data/index'
  },//end swig

  sass: {
    src: dir.src + 'scss/main.scss',
    dest: dir.dest + 'css',
    autoprefixerBrowsers: ['last 2 versions'],
    assets: {
      src: dir.src + 'scss/_assets/**/*',
      dest: dir.dest + 'css/assets/'
    }
  },//end sass

  js: {
    src: dir.src + 'js/*.js',
    dest: dir.dest + 'js',
    output: 'main.js'
  },

  bower: {
    src: './bower.json',
    dest: dir.dest + 'js/vendor/'
  },

  img: {
    src: dir.src + 'img/*',
    dest: dir.dest + 'img/'
  },//end img

  inject: {
    src: dir.dest + '**/*.html',
    dest: dir.dest,
    bower: dir.dest + 'js/vendor/**/*.js',
    inject: [
      dir.dest + 'css/*.css',
      dir.dest + 'js/*.js'
    ]
  },

  build: {
    'clean': 'clean',
    'initial': [
      'swig'
    ],
    'tasks': [
      'sass',
      'js',
      'img',
      'css:assets',
      // 'bower'
    ],
    'end': [
      'inject',
      'sitemap',
      'htmlvalid'
    ]
  },

  watch: {
    swig: {
      src: dir.src + 'templates/**',
      task: 'inject:watch'
    },
    scss: {
      src: dir.src + 'scss/**',
      task: 'sass'
    },
    js: {
      src : dir.src + 'js/**',
      task: 'js'
    },
    img: {
      src: dir.src + 'img/**',
      task: 'img'
    }
  },

  htmlValidation: {
    src: dir.dest + '**/*.html',
    dest: dir.dest + 'valid',
  },

  casper: {
    src: './tests/functional/casper.js'
  }

}
