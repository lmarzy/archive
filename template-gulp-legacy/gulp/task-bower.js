// TASK -  BOWER

'use strict';

var gulp            = require('gulp'),
	gutil           = require('gulp-util'),
	mainBowerFiles 	= require('gulp-main-bower-files'),
	config          = require('./config.js').bower,
	isProduction    = false;

if (gutil.env.prod === true) {
    isProduction = true;
}

gulp.task('bower', function() {

  return gulp.src(config.src)
        .pipe(mainBowerFiles())
        .pipe(isProduction ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.dest));

});