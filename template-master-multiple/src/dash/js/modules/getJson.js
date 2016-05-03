module.exports = function(type, url, successHandler) {

	var xhr = new XMLHttpRequest();
	xhr.open(type, url);
	xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    	var data = JSON.parse(xhr.responseText);
    	successHandler(data);
    }
  };

};