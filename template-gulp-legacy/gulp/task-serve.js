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

    [ 'swig', 'scss', 'js', 'img' ].forEach(function(target) {
        gulp.watch(config[target].src, [config[target].task]);
    });

});