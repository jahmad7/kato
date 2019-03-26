let repeatNumbers = function(data) {
  // Put your solution here
  var test;
  var result = "";

  for (var i = 0; i < data.length; i++) {

  	test = data[i];
  	var end = test[1];

  	//loop to go through such subject and add on based on second condition
  	for (var index = 0; index < end; index++){
  		result = result + test[0];
  	}

  	//add comma between subjects output
  	if (data.length > 1) {
  		result = result + " , ";
  	}

  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));