function generateBoard(whiteQueen, blackQueen){
	var size = 8;
	var board = [];

	for (var i = 0; i < size; i++) {
		board.push([]);
		for (var j = 0; j < size; j++) {
			board[i].push(0);
		}
	}

	board[whiteQueen[0]][whiteQueen[1]] = 1;
	board[blackQueen[0]][blackQueen[1]] = 1;

	return board;
}

function queenThreat(whiteQueen, blackQueen) {
	//if both queens are on the same row
	if (whiteQueen[0] == blackQueen[0]){
		return true;
	}
	//if both queens are on the same column
	else if (whiteQueen[1] == blackQueen[1]) {
		return true;
	}
	//if both queens are dialognal to one another thus have the same distance to each other in terms of row and column
	else if (Math.abs(whiteQueen[0] - blackQueen[0]) == Math.abs(whiteQueen[1] - blackQueen[1])) {
		return true
	}
	//otherwise they are not in attack postion
	else { return false; }
}






let whiteQueen = [0, 5];
let blackQueen = [6, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
//the logic of using the generatedBoard is redundent to find the locations of queens again on the generated board, the cost of using mathimatical models is much lower.
//console.log(queenThreat(generatedBoard));
console.log(queenThreat(whiteQueen, blackQueen));