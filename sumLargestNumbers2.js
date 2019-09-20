let sumLargestNumbers = function(data) {
  // Put your solution 
  let newData = data.sort(function(a, b){return b-a});
  let newArray = newData.slice (0,2) 
  return newArray[0]+ newArray[1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


