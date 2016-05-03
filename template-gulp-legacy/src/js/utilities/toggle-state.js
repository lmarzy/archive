// Simple toggle state function

// Pass in the element you want to toggle and the two data-state names
// e.g. togleState('.element', 'is-closed', 'is-open')
var toggleState = function (elem, one, two) {
  var elem = document.querySelector(elem);
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};