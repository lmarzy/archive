document.addEventListener("DOMContentLoaded", function(event) {

	//varibles

	var docBody 						= document.getElementsByTagName('body')[0];
	var sidebarLink 				= document.getElementById('show-sidebar');
	var sidebarCloseLink 		= document.getElementById('close-sidebar');
	var latestWorkWrap			= document.getElementById('latestWork-wrap');
	var latestWorkLast			= document.getElementById('view-last');
	var latestWorkCurrent		= document.getElementById('view-current');


	sidebarLink.addEventListener('click', function() {
		docBody.classList.add('sidebar-active');
	});

	sidebarCloseLink.addEventListener('click', function() {
		docBody.classList.remove('sidebar-active');
	});

	latestWorkLast.addEventListener('click', function() {
		latestWorkWrap.classList.add('active');
	});

	latestWorkCurrent.addEventListener('click', function() {
		latestWorkWrap.classList.remove('active');
	});

});