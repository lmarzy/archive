'use strict';

function isPrime(n){
  //create the starter dividor number and set to 2
  var divisor = 2;

  //initialise while loop to check n > dividor and then if n % divisor returns 0 if so return false and if not increment divisor and start again
  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  //once n is not greater than divisor return true
  return true;
}

module.exports = isPrime;
