let numberOfVowels = function(data) {
  // Put your solution here
  var vowels = 'aeiou' ;
  let output = 0 ;
  for (i = 0; i < data.length ; i++ ) {
    if (vowels.indexOf(data[i]) !== -1) {
      output += 1 ;
    }
    }
    return output;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));