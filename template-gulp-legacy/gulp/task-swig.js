// TASK - SWIG

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    swig            = require('gulp-swig'),
    htmlmin         = require('gulp-htmlmin'),
    size            = require('gulp-size'),
    plumber         = require('gulp-plumber'),
    config          = require('./config.js').swig,
    isProduction    = false,
    opts,
    onError;

onError = function (err) {  
    gutil.log(gutil.colors.red(err.message));
    this.emit('end');
};

if (gutil.env.prod === true) {
    isProduction = true;
}

opts = {
    load_json: true,
    defaults: { cache: false },
    data: require(config.data)
};

gulp.task('swig', function() {

    return gulp.src(config.src)
    .pipe(plumber(onError))
    .pipe(swig(opts))
    .pipe(isProduction ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(size())
    .pipe(gulp.dest(config.dest));

});