module.exports = function() {

	var docBody = document.getElementsByTagName('body')[0],
			burger = document.getElementById('js-burger');

	burger.addEventListener('click', function() {

		docBody.classList.toggle('nav-active');

	});

};