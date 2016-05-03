'use strict';

var path            = require('./_global').paths,
    vr              = require('postcss-vr'),
    autoprefixer    = require('autoprefixer'),
    mqPacker        = require('css-mqpacker'),
    cssNano         = require('cssnano'),
    focus           = require('postcss-focus');

module.exports = {
  src: path.src + 'styles/{global,index}.scss',
  uncssGlob: path.dest + '**/*.html',
  uncssIgnore: [''],
  mapWrite: './map',
  dest: path.dest + 'css',
  processorsDev: [
    vr,
    autoprefixer({browsers: ['last 2 version']}),
    focus
  ],
  processorsProd: [
    mqPacker,
    cssNano
  ]
}
