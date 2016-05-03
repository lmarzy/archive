// TASK - SERVE

'use strict';

var gulp 					= require('gulp'),
		browserSync 	= require('browser-sync'),
		reload 				= browserSync.reload,
		config				= require('../config/serve.json'),
		serve;


serve = function(taskName, tasks, baseDir, watchSwigPath, watchSassPath, watchJsPath, watchSwigTask, watchSassTask, watchJsTask) {

	gulp.task(taskName, [tasks], function () {

		browserSync({
			notify: true,
			server: {
				baseDir: baseDir
			}
		});

		gulp.watch(watchSwigPath, [watchSwigTask]);
		gulp.watch(watchSassPath, [watchSassTask]);
		gulp.watch(watchJsPath, [watchJsTask]);

	});

}

for (var prop in config) {

	serve(
		config[prop].taskName,
		config[prop].tasks,
		config[prop].baseDir,
		config[prop].watch.swig.path,
		config[prop].watch.scss.path,
		config[prop].watch.js.path,
		config[prop].watch.swig.task,
		config[prop].watch.scss.task,
		config[prop].watch.js.task
	);

}
