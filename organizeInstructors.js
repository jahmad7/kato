bconst organizeInstructors = function(instructors) {
  // create courses array with all values 
  var courses = [];
  for (var i = 0; i < instructors.length; i++) {
  	courses.push(instructors[i].course);
  }
  //fitler down the array to remove duplicates 
  for (var ci = 0; ci < courses.length; ci++) {
  	for (var si = 1; si <courses.length -1; si ++) {
  		if (courses[ci] == courses[si]) {
  			courses.splice(si,1);
  		} 
  	}
  }

  //object to store classes offered 
  var classes = {};
  
  //create array to hold teachers for each class 
  var teachers =[];

  for (var i = 0; i < courses.length; i++) {
  	for (var j = 0; j <instructors.length; j++) {
  		if (instructors[j].course == courses[i]) {
  			teachers.push(instructors[j].name);
  		}
  	}
  	classes[courses[i]] = teachers;
  	teachers = [];
  }
  
  return classes;

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