// TASK - SERVE

'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    config          = require('./config.js').watch;

gulp.task('serve', ['default'], function () {

    browserSync({
        notify: true,
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch(config.swig.src, [config.swig.task]);
    gulp.watch(config.scss.src, [config.scss.task]);
    gulp.watch(config.js.src, [config.js.task]);
    gulp.watch(config.img.src, [config.img.task]);

});