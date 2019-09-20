const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var longest = "" ;
  for (i = 0; i <instructors.length ; i++) {
    let nameLength = instructors[i].name ;
    if (nameLength.length > longest.length) {
      longest = nameLength;
      output = instructors[longest.indexOf(longest[i])];
    }
  }
  return output
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));