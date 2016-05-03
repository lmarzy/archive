module.exports = function() {

	var burger = document.getElementById('js-burger'),
			docBody = document.getElementsByTagName('body')[0];

	burger.addEventListener('click', function() {

		docBody.classList.toggle('nav-is-active');

	});

};