let sumLargestNumbers = function(data) {
  // Put your solution 
  data.sort(function(a, b){return a-b});
  let output = []
  for (var i = data.length-2; i<= (data.length)-1; i++) {
    output.push(data[i]) ;
  }
  return output[0]+output[1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


