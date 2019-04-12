const makeCase = function(input, style) {
  // Put your solution here

  var data = sentenceArray(input);
  var tasks = []
  
  //since more than one thing can be asked for in terms of styles 
  if ((typeof style) == "string" ) {
  	tasks.push(style);
  }
  else{
  	for (var i = 0; i < style.length; i++) {
  		tasks.push(style[i]);
  	}
  }

  for (var i = 0; i < tasks.length; i++) {
  	switch (tasks[i]) {
  		case "camel": console.log(camelCase(data)); break; //break is nessary 
  		case "pascal": console.log(camelCase(data)); break;
  		case "snake": console.log(snake(data)); break;
  		case "kebab": console.log(kabob(data)); break;
  		case "title": console.log(title(data)); break;
  		case "vowel": console.log(vowel(data)); break;
  		case "consonant": console.log(consonant(data)); break;
  		case "upper": console.log(upper(data)); break;
  	}
  }
}

//function to create array of words
function sentenceArray(input) {
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
	return words;
}


function camelCase(data) {
	var camelCase = ""; 
	camelCase = camelCase + data[0];
	for (var i = 1; i < data.length; i++) {
		camelCase = camelCase + data[i].charAt(0).toUpperCase() + data[i].slice(1);
	}
	return camelCase;
}



function snake(data) {
	var snake = ""; 
	snake = snake + data[0];
	for (var i = 1; i < data.length; i++) {
		snake = snake + "_";
		snake = snake + data[i];
	}
	return snake;
}

function kabob(data) {
	var kabob = ""; 
	kabob = kabob + data[0];
	for (var i = 1; i < data.length; i++) {
		kabob = kabob + "-";
		kabob = kabob + data[i];
	}
	return kabob;
}



function title(data) {
	var title = ""; 
	for (var i = 0; i < data.length; i++) {
		title = title + data[i].charAt(0).toUpperCase() + data[i].slice(1);
		if (i < data.length - 1) {
			title = title + " ";
		}
	}
	return title;
}

function vowel(data) {
	var validInputs = [`a`, `e`, `i`, `o`,`u`];
	var sentence = "";
	var word = "";
	var currentWord;
	var character = "";
	for (var i = 0; i < data.length; i++) {
		currentWord = data[i]
		for (var j =0; j < currentWord.length; j++) {
			character = currentWord[j];
			if (validInputs.includes(character)){
				word = word + character.toUpperCase();
			}
			else {
				word = word + character;
			}
		}
		sentence = sentence + word;
		word = "";
		sentence = sentence + " ";
	}

	return sentence;
}


function consonant(data){
	var invalidInputs = [`a`, `e`, `i`, `o`,`u`];
	var sentence = "";
	var word = "";
	var currentWord;
	var character = "";
	for (var i = 0; i < data.length; i++) {
		currentWord = data[i]
		for (var j =0; j < currentWord.length; j++) {
			character = currentWord[j];
			if (invalidInputs.includes(character)){
				word = word + character;
			}
			else {
				word = word + character.toUpperCase();
			}
		}
		sentence = sentence + word;
		word = "";
		sentence = sentence + " ";
	}

	return sentence;
}


function upper(data) {
	var sentence = "";
	var word = "";
	var currentWord;
	var character = "";
	for (var i = 0; i < data.length; i++) {
		currentWord = data[i]
		for (var j =0; j < currentWord.length; j++) {
			character = currentWord[j];
			if (invalidInputs.includes(character)){
				word = word + character;
			}
			else {
				word = word + character.toUpperCase();
			}
		}
		sentence = sentence + word;
		word = "";
		sentence = sentence + " ";
	}

	return sentence;
}

makeCase("this is a string1", "camel");
makeCase("this is a string2", "pascal");
makeCase("this is a string3", "snake");
makeCase("this is a string4", "kebab");
makeCase("this is a string5", "title");
makeCase("this is a string6", "vowel");
makeCase("this is a string7", "consonant");
makeCase("this is a string8", ["upper", "snake"]);