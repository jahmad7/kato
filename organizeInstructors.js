const organizeInstructors = function(instructors) {
  // create courses object
  var courses = {
  	iOS: [],
  	web: []
  };

  for (var i = 0; i < instructors.length; i++) {
  	if (instructors[i].course == "iOS") {
  		courses.iOS.push(instructors[i].name);
  	}
  	else {courses.web.push(instructors[i].name);}
  }

  return courses;

}

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