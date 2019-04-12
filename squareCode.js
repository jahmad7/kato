const squareCode = function(message) {
  // Put your solution here
  var words = [];
  var result = "";
  wordNum = 0;

  //break string into each word as a index on the words array
  for (var i = 0; i < message.length; i++) {
  	if (message[i] !== " ") {
  		result = result + message[i];
  	}else {
  		words[wordNum] = result;
  		wordNum++
  		result = ""; 
  	}
  }

  return words;


};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
