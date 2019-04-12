let numberOfVowels = function(data) {
  // Put your solution here
  var sum = 0;
  var validInputs = [`a`, `e`, `i`, `o`,`u`];
  for (var i = 0; i < data.length; i++) { 
  	//.indexOf method looks to see if any of the valid input corelate with the value of data[i]
  	if (validInputs.indexOf(data[i]) > -1 ) {
  		sum++
  	}
  }
  return sum;
};


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));