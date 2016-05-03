module.exports = function(type, url) {

	var xhr = new XMLHttpRequest();
	xhr.open(type, url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.readyState);
  		console.log(xhr.responseText);
    }
  };
  xhr.send();

};

module.exports = function(type, url) {

	var xhr = new XMLHttpRequest();
	xhr.open(type, url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      
      var response = JSON.parse( xhr.responseText );

    }
  };

  xhr.send();

};

getAjax('GET', '/dash/data/perf.json');