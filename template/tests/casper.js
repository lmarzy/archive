//casper js tests

var config = require('config.json');


// base page checks (check title has been updated, tags exist and contain the correct aria roles(html, head, body, header, main, footer))
function testPage(url, title, page) {

    casper.test.begin('Base Page Checks', 11, function suite(test) {
        casper.start(url, function() {
            
            // test page exists
            test.assertHttpStatus(200);

            // structural tags exist
            test.assertExists('html', '<html> tag exists');
            test.assertExists('head', '<head> tag exists');
            test.assertExists('body', '<body> tag exists');
            test.assertExists('header', '<header> tag exists');
            test.assertExists('main', '<main> tag exists');
            test.assertExists('footer', '<footer> tag exists');

            // title is correct
            test.assertTitle(title, page + ' has the correct title');

            //test structural elements contain the correct aria roles
            test.assertEvalEquals(function () {
                return document.querySelectorAll('header')[0].getAttribute('role').match('banner').toString();
            }, 'banner', 'role="banner" found');

            test.assertEvalEquals(function () {
                return document.querySelectorAll('main')[0].getAttribute('role').match('main').toString();
            }, 'main', 'role="main" found');

            test.assertEvalEquals(function () {
                return document.querySelectorAll('footer')[0].getAttribute('role').match('contentinfo').toString();
            }, 'contentinfo', 'role="contentinfo" found');


        }).run(function() {
            test.done();
        });
    });

}

testPage(config.host, config.pages.home.pageTitle, config.pages.home.pageName);



// TESTS

// test element exists
    // test.assertExists('SELECTOR', 'STRING TO OUTPUT TO THE CONSOLE'); 

// test element count
    // test.assertElementCount('picture > source', 2);

// test element contains correct text
    // test.assertEvalEquals(function () {
    //  return document.querySelectorAll('header')[0].getAttribute('src').match('medium.jpg').toString();
    // }, 'medium.jpg', 'medium.jpg found using 320x480 viewport.');
