// TASK - JS

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    rev             = require('gulp-rev'),
    size            = require('gulp-size'),
    plumber         = require('gulp-plumber'),
    config          = require('./config.js').js,
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    isProduction    = false,
    onError;

onError = function (err) {  
    gutil.log(gutil.colors.red(err.message));
    this.emit('end');
};

if (gutil.env.prod === true) {
    isProduction = true;
}

gulp.task('js', function() {
  return gulp.src(config.src)
    .pipe(plumber(onError))
    .pipe(concat(config.output))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(isProduction ? uglify() : gutil.noop())
    .pipe(isProduction ? rev() : gutil.noop())
    .pipe(size())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));

});