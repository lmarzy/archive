var toggleNav = require('./modules/toggleNav');
var getAjax 	= require('./modules/getJson');

var getPpYslow = require('./modules/ppYslow');

getPpYslow();

toggleNav();

getAjax('GET', '/dash/data/dod/pp.json', function(data) {

  if(document.getElementById("js-dodPPComplete")) {

    var ppComplete = document.getElementById("js-dodPPComplete"),
        count = 0;

  	for(var i = 0; i < data.length; i++) {
      if(data[i].w3c && data[i].accessibility && data[i].docOutline && data[i].browserTesting && data[i].deviceTesting) {
        count +=1;
      }
    }

    ppComplete.innerHTML = count;

  }

});

getAjax('GET', '/dash/data/checklist/pp.json', function(data) {

  if(document.getElementById("js-checklistPPComplete")) {

    var ppComplete = document.getElementById("js-checklistPPComplete"),
        count = 0;

    for(var i = 0; i < data.length; i++) {
      if(data[i].complete) {
        count +=1;
      }
    }

    ppComplete.innerHTML = count;

  }

});

getAjax('GET', '/dash/data/accessibility/pp.json', function(data) {

  if(document.getElementById("js-accessibilityPP")) {

    var ppChecks = document.getElementById("js-accessibilityPP"),
        count = 0;

    for(var i = 0; i < data.length; i++) {
      if(data[i].landmarkBanner && 
        data[i].landmarKNav && 
        data[i].landmarkMain && 
        data[i].landmarkArticle && 
        data[i].landmarkComplementary && 
        data[i].landmarkContentinfo && 
        data[i].landmarkSearch &&
        data[i].languageAttribute &&
        data[i].documentOutline &&
        data[i].linksFocus &&
        data[i].linksRecognisable &&
        data[i].imageAlt &&
        data[i].jsUnobtrusive &&
        data[i].jsNoJsAlternative &&
        data[i].formsLayout &&
        data[i].formsLabel &&
        data[i].formsFieldset &&
        data[i].formsLegend &&
        data[i].mediaTextTranscripts &&
        data[i].mediaSubtitles &&
        data[i].colourContrast &&
        data[i].testingScreenReader &&
        data[i].languageAttribute &&
        data[i].testingKeyboardNavigation
        ) {
        count +=1;
      }
    }
    
    ppChecks.innerHTML = count;

  }

});

getAjax('GET', '/dash/data/bugs/pp.json', function(data) {

  if(document.getElementById("js-bugsPP")) {

    var ppBugs = document.getElementById("js-bugsPP"),
        count = 0;

    for(var i = 0; i < data.length; i++) {
      if(data[i].resolved) {
        count +=1;
      }
    }

    if (count === 0) {
      ppBugs.parentNode.parentNode.classList.add("h-is-hidden");
    }
    
    ppBugs.innerHTML = count;

  }
  

});