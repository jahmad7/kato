let talkingCalendar = function(date) {
  // format date to work with algo
  date = date + "/";
  var current = "";
  var workingDate = [];
  var num = 0;

  //break data into year, month and day 
  for (var i = 0; i < date.length; i++) {
  	if (date[i] !== "/") {
  		current = current + date[i];
  	}else {
  		workingDate[num] = current;
  		num++
  		current = ""; 
  	}
  }

  var months = {
  	"01": "January",
  	"02": "Febuary",
  	"03": "March",
  	"04": "Apirl",
  	"05": "May",
  	"06": "June",
  	"07": "July",
  	"08": "August",
  	"09": "September",
  	"10": "October",
  	"11": "November",
  	"12": "December"
  };

  return months[workingDate[1]] + " "+ workingDate[2] + " " + workingDate[0];

}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));