// TASK - HTML-VALIDATOR

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    htmlv           = require('gulp-html-validator'),
    config          = require('./config.js').htmlValidation,
    isProduction    = false;

if (gutil.env.prod === true) {
    isProduction = true;
}

gulp.task('htmlvalid', function () {

    if(!isProduction) {
        gulp.src(config.src)
        .pipe(htmlv({format: 'html'}))
        .pipe(gulp.dest(config.dest));
    }

});