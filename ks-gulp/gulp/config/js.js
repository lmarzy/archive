'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.src + 'js/scripts.js',
  outputName: 'scripts.js',
  presets: ["es2015"],
  dest: path.dest + 'js'
}
