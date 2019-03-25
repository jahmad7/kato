const instructorWithLongestName = function(instructors) {
  // Put your solution here
  var subject = [{length: instructors[0].name.length, index: 0}]
  for (var i = 0; i < instructors.length; i++) {
  	if (instructors[i].name.length > subject.length) {
  		subject.length = instructors[i].name.length;
  		subject.index = i;
  	}
  }
  return instructors[subject.index];
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