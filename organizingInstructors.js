const organizeInstructors = function(instructors) {
  // Put your solution here
  let output = {};
  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    let name = instructors[i].name;
    if (!output[course]) {
      output[course] = [];
    }
    output[course].push(name);
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));