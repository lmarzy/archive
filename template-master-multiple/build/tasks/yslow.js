// // TASK - TEST-CASPER

// 'use strict';

// var gulp 	= require('gulp'),
// 		exec 	= require('child_process').exec;
 
// gulp.task('yslow:dash', function (cb) {
//   exec('phantomjs yslow.js --info basic --format json http://localhost:3000 > src/dash/data/perf.json', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// })


// TASK - YSLOW

'use strict';

var gulp 				= require('gulp'),
		exec 				= require('child_process').exec,
		config			= require('../config/yslow.json'),
		taskYslow;
 

taskYslow = function(taskName, ex) {

	gulp.task(taskName, function (cb) {
	  exec(ex, function (err, stdout, stderr) {
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
	  });
	});

}

for (var prop in config) {

	taskYslow(config[prop].taskName, config[prop].exec);

}