var fibSeq = function(n) {

  if(n <= 2) {
    return 1;
  }else {
    return fibSeq(n - 1) + fibSeq(n - 2);
  }

}

module.exports = fibSeq;
