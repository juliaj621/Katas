const urlEncode = function(text) {
  // Put your solution here
  let newString = "";
  let newText = text.trim();
  for (var x = 0; x < newText.length ; x++) {
    if(newText[x] === " ") {
      newString += ("20%");
    }
    else {
      newString += (newText[x]);
    }
  }
  return newString
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));