// TASK - SERVE

'use strict';

var gulp 					= require('gulp'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		config				= require('../config/serve.json');

gulp.task(config.taskName, ['default'], function () {

	browserSync({
		notify: true,
		server: {
			baseDir: 'dist'
		}
	});

	gulp.watch(config.watch.swig.path, [config.watch.swig.task]);
	gulp.watch(config.watch.scss.path, [config.watch.scss.task]);
	gulp.watch(config.watch.js.path, [config.watch.js.task]);

});
