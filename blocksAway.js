const blocksAway = function(directions) {
  // value sets
  var locationSet = {
  	North: 0,
  	East: 0
  };

  //array for [north, east, south, west]
  var location = [0,0,0,0]
  var index = 0;
  var currentIndex = 0;

  //read through the directions 
  for (var i = 0; i < directions.length; i++) {
  	
  	//if one direction 
  	if (i%2 == 0) {
  		if (directions[i] == "right") {
  			index += 1;
  			currentIndex = index % 4;
  		}
  		else if (directions[i] == "left") {
  			if (index == 0) {
  				index = 3;
  				currentIndex = index % 4;
  			}
  			else {
  				index -= 1;
  				currentIndex = index % 4;
  			}
  		}

  	}
  	//if one number of movements
  	else {
  		location[currentIndex] += directions[i];
  	}
  }

  //determine sum of directions taken 

  //y axis location 
  if ( (location[0] - location[2]) > 0 ) {
  	locationSet["North"] = location[0] - location[2]
  } 
  else if ((location[0] - location[2]) < 0 ) {
  	locationSet["South"] = Math.abs(location[0] - location[2])
  }

  //x axis location 
  if ( (location[1] - location[3]) > 0 ) {
  	locationSet["East"] = location[1] - location[3]
  } 
  else if ((location[1] - location[3]) < 0 ) {
  	locationSet["West"] = Math.abs(location[1] - location[3])
  }


  return locationSet;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));