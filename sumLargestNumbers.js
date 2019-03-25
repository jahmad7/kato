let sumLargestNumbers = function(data) {
  // Put your solution here
  var max = Math.max(...data);
  var current = data[0];

  for (var i = 0; i < data.length; i++) {
  	if (data[i] > current && data[i] != max) {
  		current = data[i];
  	}
  }
  var sum = current + max
  return "sum: " + sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));