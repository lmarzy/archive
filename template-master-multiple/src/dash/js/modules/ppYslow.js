var getAjax = require('./getJson');

module.exports = function() {

  getAjax('GET', '/dash/data/yslow/pp.json', function(data) {

    if(document.getElementById("js-ppYslowSize")) {

      var yslowSize = document.getElementById("js-ppYslowSize"),
          bytes = data.w;

      var sizes = ['bytes', 'kb', 'mb'];
      if (bytes == 0) return 'n/a';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      if (i == 0) { 
        var j = (bytes / Math.pow(1024, i)) + ' ' + sizes[i]; 
      }
      var j = (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];

      yslowSize.innerHTML = j;

    };

    if(document.getElementById("js-ppYslowScore")) {

      var yslowScore  = document.getElementById("js-ppYslowScore");

      if(data.o > 0 && data.o <70) {
        yslowScore.innerHTML = "D";
      }else if(data.o > 70 && data.o <80) {
        yslowScore.innerHTML = "C";
      }else if(data.o > 80 && data.o <90) {
        yslowScore.innerHTML = "B";
      }else {
        yslowScore.innerHTML = "A";
      }

    };

    if(document.getElementById("js-ppYslowRequests")) {

      var yslowRequests = document.getElementById("js-ppYslowRequests");

      yslowRequests.innerHTML = data.r;

    };

    if(document.getElementById("js-ppYslowLoadTime")) {

      var yslowLoadTime = document.getElementById("js-ppYslowLoadTime");

      var seconds = data.lt / 1000;

      yslowLoadTime.innerHTML = seconds + "s";

    };

  });

};