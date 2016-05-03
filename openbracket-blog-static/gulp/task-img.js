// TASK - JS

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    imagemin        = require('gulp-imagemin'),
    size            = require('gulp-size'),
    config          = require('./config.js').img,
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    isProduction    = false;

if (gutil.env.prod === true) {
    isProduction = true;
}

gulp.task('img', function() {

    return gulp.src(config.src)
    .pipe(isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(size())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));

});