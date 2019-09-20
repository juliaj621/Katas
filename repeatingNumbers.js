let repeatNumbers = function(data) {
  // Put your solution here
let output = "" ;
for (x = [0]; x < data.length ; x++) {
for (y = [1]; y <= data[x][1]; y++ ) {
  output += data[x][0] ;
}
if(x < data.length -1 ) {
  output += ", " ;
}
}
return output ;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));