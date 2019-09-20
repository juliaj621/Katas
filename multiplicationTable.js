const multiplicationTable = function(maxValue) {
  // Your code here
  output = '\n'
  for (x = 0; x <= maxValue; x++) {
    for (y = 0; y <= maxValue; y++) {
      if (x > 0 && y > 0) {
        output += (x*y) + ' ' ;
      }
    } 
      output += '\n' ;
  }
  return output ;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
