const multiplicationTable = function(maxValue) {
  // variables to hold the matrix the start of the count and the multiples we use 
  var matrix = [];
  var count = 1;
  var multiple = 1;
  for (var i = 0; i < maxValue; i++) {
  	matrix[i] = [i];
  	for (var j = 0; j <maxValue; j++) {
  		matrix[i][j] = count * multiple;
  		count++
  	}
  	//reset count and increase multiple level
  	count = 1;
  	multiple++
  }

  return matrix;

}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));