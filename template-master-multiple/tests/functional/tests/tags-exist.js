module.exports = function(url, name) {

    casper.test.begin(name, 6, function suite(test) {
        casper.start(url, function() {

            // structural tags exist
            test.assertExists('html', '<html> tag exists');
            test.assertExists('head', '<head> tag exists');
            test.assertExists('body', '<body> tag exists');
            test.assertExists('header', '<header> tag exists');
            test.assertExists('main', '<main> tag exists');
            test.assertExists('footer', '<footer> tag exists');

        }).run(function() {
            test.done();
        });
    });

}