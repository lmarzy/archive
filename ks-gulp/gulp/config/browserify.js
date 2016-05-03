'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.src + 'browserify/index.js',
  outputName: 'main.js',
  presets: ["es2015"],
  dest: path.dest + 'js'
}
