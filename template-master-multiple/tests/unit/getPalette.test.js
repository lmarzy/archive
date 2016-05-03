var getPalette 	= require("../src/dash/js/modules/getPalette");
var assert 			= require('assert');

describe("getPalette", function() {

	it("Should return an array with 3 items", function() {

			var palette = getPalette();
			assert(Array.isArray(palette));
			assert.equal(palette.length, 3, "Did not return correct number of items");

	});

});