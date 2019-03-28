let camelCase = function(input) {
  //declare varibles for looking at each word
  //the final camelcase string
  //array to keep the strings 
  input = input + " ";
  var result = "";
  var words = [];
  wordNum = 0;

  //break string into each word as a index on the words array
  for (var i = 0; i < input.length; i++) {
  	if (input[i] !== " ") {
  		result = result + input[i];
  	}else {
  		words[wordNum] = result;
  		wordNum++
  		result = ""; 
  	}
  }

  //put words back together as the long camcelcase String
  //.slice method returns a range in an array
  result = result + words[0];
  for (var i = 1; i < words.length; i++) {
    result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));