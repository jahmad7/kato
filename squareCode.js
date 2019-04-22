const squareCode = function(message) {
  var squareValue = 0;
  var wordString = "";

  //create a string of the message without the spaces
  for (var i = 0; i < message.length; i++) {
  	if (message[i] != " ") {
  		wordString = wordString + message[i];
  	}
  }

  squareValue = Math.ceil(Math.sqrt(wordString.length));

  var wordMatrix = [];

  for (var i = 0; i < squareValue; i++) {
  	wordMatrix.push([]);
  	for (var j = 0; j < squareValue; j++) {
  		wordMatrix[i].push("");
  	}
  }



  var index = 0;

  for (var row = 0; row < squareValue; row++) {
  	for (var col = 0; col < squareValue; col++) {
  		wordMatrix[row][col] = wordString[index];
  		index++
  	}
  }

  var finalString = "";

  for (var col = 0; col < squareValue; col++) {
  	for (var row = 0; row < squareValue; row++) {
  		//remove empty array values from final string
  		if (wordMatrix[row][col] != undefined) {
  			finalString += wordMatrix[row][col];
  		}
  	}
  	finalString += " ";
  }

  return finalString;

}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
