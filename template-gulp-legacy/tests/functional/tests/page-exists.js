module.exports = function(url, name) {

    casper.test.begin(name, 1, function suite(test) {
        casper.start(url, function() {
            
            // test page exists
            test.assertHttpStatus(200);

        }).run(function() {
            test.done();
        });
    });

}