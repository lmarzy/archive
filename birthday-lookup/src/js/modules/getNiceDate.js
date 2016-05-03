var months = require('./months');

module.exports = function(uglyDate) {
    var today = new Date(uglyDate),
        day = today.getDate(),
        month = months[today.getMonth()],
        year = today.getFullYear();

    return day + ' ' + month + ', ' + year;
}