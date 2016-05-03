// TASK - TEST-CASPER

'use strict';

var gulp         = require('gulp'),
    casperJs     = require('gulp-casperjs'),
    config       = require('./config.js').casper;

gulp.task('casper', function () {
    gulp.src(config.src)
    .pipe(casperJs()); //run capserjs test.js 
});