var date            = require('./modules/date');
var getAge          = require('./modules/getAge');
var getNiceDate     = require('./modules/getNiceDate');
var getPerson       = require('./modules/getPerson');
var print           = require('./modules/print');

document.getElementById('current-date').innerHTML = date.day + " " + date.date;

var btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', function() {
    
    var inputName       = document.getElementById('name').value,
        xhr             = new XMLHttpRequest(),
        person,
        message;

        xhr.onreadystatechange = function() {

            if(xhr.readyState === 4) {

                var data = JSON.parse(xhr.responseText);

                while(true) {
                    if(inputName === "") {
                        alert('Please enter a name to find a someones birthday');
                        break;
                    }
                    for (var i = 0; i < data.length; i++) {
                        person = data[i];
                        if (inputName.toLowerCase() === person.name.toLowerCase()) {
                            message = getPerson(person);
                            print(message, 'search-result');
                        }
                    }
                    break;
                }

            }
        } // end onreadystatechange

        xhr.open('GET', '/js/data/person.json');
        xhr.send();

},false);

var upcoming = new XMLHttpRequest(),
    today = new Date();
    month = today.getMonth();

upcoming.onreadystatechange = function() {

    if(upcoming.readyState === 4) {

        var dataList = JSON.parse(upcoming.responseText),
            output = '';

        for (var i = 0; i < dataList.length; i++) {
            var upcomingDate = new Date(dataList[i].dob);
                upcomingMonth = upcomingDate.getMonth();

            if(month === upcomingMonth) {
                
                    output += '<dt class="list-upcoming__name">' + dataList[i].name + '</dt>';
                    output += '<dd class="list-upcoming__date date">' + dataList[i].dob + '</dd>';

                var listUpcomingDiv = document.getElementById('list-upcoming');

                listUpcomingDiv.innerHTML = output;

            }
        }

    }
}

upcoming.open('GET', '/js/data/person.json');
upcoming.send();









