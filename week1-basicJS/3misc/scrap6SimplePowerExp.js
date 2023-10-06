function power(base, exponent) {
    if(exponent === 0){
        return 1;
    }
  var exponent = exponent || 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

console.log(power(4, 0));
// 1