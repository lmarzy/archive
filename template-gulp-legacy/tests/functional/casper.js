//casper js tests

var config 			= require('config.json');
var pageExists 		= require('tests/page-exists.js');
var tagsExist 		= require('tests/tags-exist.js');

// tagsExist(config.host, config.tests.baseTagChecks.name);

for (var prop in config) {

	pageExists(config[prop].pageUrl, config[prop].pageName);
	tagsExist(config[prop].pageUrl, config[prop].pageName);

}