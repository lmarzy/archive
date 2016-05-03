'use strict';
var isPrime = require('./algorithms/is-prime');
var fibNumber = require('./algorithms/fibonacci');
var fibSequence = require('./algorithms/fibonacci-sequence');

var btnPrime = document.getElementById('js-click-prime');
var outputPrime = document.getElementById('js-output-prime');
var btnFib = document.getElementById('js-click-fib');
var outputFib = document.getElementById('js-output-fib');
var btnFibSeq = document.getElementById('js-click-fibSeq');
var outputFibSeq = document.getElementById('js-output-fibSeq');

btnPrime.addEventListener('click', function() {

  var input = document.getElementById('js-input-prime').value;

  var prime = isPrime(input);

  outputPrime.innerHTML = prime;

});

//----------------------------------------------------------------------------------------------------//

btnFib.addEventListener('click', function() {

  var input = document.getElementById('js-input-fib').value;

  var fib = fibNumber(input);

  outputFib.innerHTML = fib;

});

//----------------------------------------------------------------------------------------------------//

btnFibSeq.addEventListener('click', function() {

  var input = document.getElementById('js-input-fibSeq').value,
      fibSeq = '';

  for(var i = 1; i <= input; i++) {
      fibSeq += fibSequence(i) + ' ';
  }

  outputFibSeq.innerHTML = fibSeq;

});
