var daysOfweek  = require('./daysOfWeek');
var months      = require('./months');

var today      = new Date(),
	day        = daysOfweek[today.getDay()];
	date 	   = today.getDate();
	month      = months[today.getMonth()];
	year       = today.getFullYear();
	fullDate   = date + " " + month + ", " + year;

module.exports = {
	day 	: day,
	date 	: fullDate
}