const urlDecode = function(text) {
  //using the /*/g does a global search for the index and replaces all
  var subject = text.replace(/%20/g, ' ');

  //seperate into indexes for each key looking for the `&`
  var keyValueIndex = [];
  var keyIndex = [];
  var currentKey = "";

  //Seperate each key into its own index value 
  for (var i =0; i < subject.length; i++) {
  	if (subject[i] == "&" ) {
  		keyValueIndex.push(currentKey);
  		currentKey = "";
  	}
  	else if (subject[i] == "=" ){
  		keyIndex.push(currentKey);
  		currentKey = "";
  	}
  	else if (i == subject.length-1) {
  		currentKey += subject[i];
  		keyValueIndex.push(currentKey);
  	}
  	else{
  		currentKey += subject[i];
  	}
  }

  //create object and insert each key
  var variableObject = {};

  for (var i = 0; i < keyIndex.length; i++) {
  	variableObject[keyIndex[i]] = keyValueIndex[i];
  }


  return variableObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);