let calculateChange = function(total, cash) {
  // calculate change total
  total = cash - total;
  console.log(total);
  change = {
  	twentyDollars: 0,
  	tenDollars: 0,
  	fiveDollars: 0,
  	twoDollars: 0,
  	oneDollars: 0,
  	quaters: 0,
  	dimes: 0,
  	nickels: 0,
  	pennies: 0
  };


  while (total !== 0){
  	if (total >= 20) {
  		change.twentyDollars++
  		total = total - 20;
  	}
  	else if (total >= 10) {
  		change.tenDollars++
  		total = total - 10;
  	}
  	else if (total >= 5) {
  		change.fiveDollars++
  		total = total - 5;
  	}
  	else if (total >= 2) {
  		change.twoDollars++
  		total = total - 2;
  	}
  	else if (total >= 1) {
  		change.oneDollars++
  		total = total - 1;
  	}
  	else if (total >= 0.25) {
  		change.quaters++
  		total = total - 0.25;
  	}
  	else if (total >= 0.10) {
  		change.dimes++
  		total = total - 0.1;
  	}
  	else if (total >= 0.05) {
  		change.nickels++
  		total = total - 0.05;
  	}
  	else if (total >= 0.01) {
  		change.pennies++
  		total = total - 0.01;
  	}
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));