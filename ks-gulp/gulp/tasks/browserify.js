// TASK - BROWSERIFY - CONVERT ES6 AND MODULES USING BABELIFY WITH ES2015 PRESETS

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    plumber         = require('gulp-plumber'),
    browserify      = require("browserify"),
    babelify        = require("babelify"),
    source          = require('vinyl-source-stream'),
    streamify       = require('gulp-streamify'),
    eslint          = require('gulp-eslint'),
    uglify          = require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps'),
    configTask      = require('../config/browserify'),
    configGlobal    = require('../config/_global'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload;


gulp.task('browserify', function() {

  return browserify(configTask.src, { debug: true })
  .transform(babelify.configure({ presets: configTask.presets }))
  .bundle()
  .pipe(source(configTask.outputName))
  .pipe(streamify(plumber(configGlobal.onError)))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(configGlobal.isProduction ? streamify(uglify()) : gutil.noop())
  .pipe(gulp.dest(configTask.dest))
  .pipe(reload({stream:true}))
});
