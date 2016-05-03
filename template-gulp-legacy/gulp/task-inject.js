// TASK - INJECT

'use strict';

var gulp            = require('gulp'),
    inject          = require('gulp-inject'),
    config          = require('./config').inject,
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    isProduction    = false;

gulp.task('inject', function() {

  return gulp.src(config.src)
  .pipe(inject(gulp.src(config.bower, {read: false}), {name: 'bower', relative: true}))
  .pipe(inject(gulp.src(config.inject, {read: false}), {relative: true}))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));

});

gulp.task('inject:watch', ['swig'], function() {

  return gulp.src(config.src)
  .pipe(inject(gulp.src(config.inject, {read: false}), {relative: true}))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));

});