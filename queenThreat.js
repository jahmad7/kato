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

function queenThreat(generatedBoard) {

	var rowSums = [];
	var colSums = [];
	var diaSums = [];
	var size = generatedBoard.length;
	
	//create arrays with sums of each row or col
	for (var i = 0; i < size; i++) {
		rowSums.push(0);
		colSums.push(0);
		for (var j = 0; j < size; j++) {
			rowSums[i] += generatedBoard[i][j];
			colSums[i] += generatedBoard[j][i];
		}
	}

	var threat = false;

	//find rows that have rows or columns that have both queens
	for (var i = 0; i < size; i++) {
		if ( rowSums[i] > 1 || colSums > 1) {
			threat = true;
		}
	}

	return threat;
}






let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));