var getNiceDate     = require('./getNiceDate');
var getAge          = require('./getAge');
var daysUntilNext   = require('./daysUntilNextBirthday');

module.exports = function(person) {

    var html = '<td>' + person.name + '</td>';
        html += '<td>' + getNiceDate(person.dob) + '</td>';
        html += '<td>' + getAge(person.dob) + '</td>';
        html += '<td>' + daysUntilNext(person.dob) + '</td>';

    return html;

};