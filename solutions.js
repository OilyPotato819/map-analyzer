// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Water";
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else if (column <= 7) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Water";
	}
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 3 && column <= 7) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Hills";
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else
	document.getElementById("currentTile").innerHTML = "Sand";
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 2) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else if(row <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Water";
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 2 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Water";
	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (row === 4 && column === 7) {
		document.getElementById("currentTile").innerHTML = "Water";
	} else {
		document.getElementById("currentTile").innerHTML = "Sand";
	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (column === 2 || row === 5) {
		document.getElementById("currentTile").innerHTML = "Tree";
	} else {
		document.getElementById("currentTile").innerHTML = "Sand";
	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 5 && row <=5) {
		document.getElementById("currentTile").innerHTML = "Water";
	} else {
		document.getElementById("currentTile").innerHTML = "Sand";
	}
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 1) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else if (column <= 3) {
		document.getElementById("currentTile").innerHTML = "Tree";
	} else if (column <= 7) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Water";
	}
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 5 && row <= 3) {
		document.getElementById("currentTile").innerHTML = "Water";
	} else if (column >= 6 && row <=3) {
		document.getElementById("currentTile").innerHTML = "Hills";
	} else if (column <= 5 && row >=4) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Tree";
	}
}

function level12Solution() {
	// USE BINARY IF STATEMENT
	if ((column <= 5 && row <= 4) || (column >= 6 && row >= 5)) {
		document.getElementById("currentTile").innerHTML = "Water";
	} else {
		document.getElementById("currentTile").innerHTML = "Sand";
	}
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 4 && column <= 9 && row >= 2 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Sand";
	} else {
		document.getElementById("currentTile").innerHTML = "Tree";
	}
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if (column >= 2 && column <= 4 && row >= 1 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Tree";
	} else if (column >= 7 && column <= 10 && row >= 3 && row <= 5) {
		document.getElementById("currentTile").innerHTML = "Water";
	} else {
		document.getElementById("currentTile").innerHTML = "Sand";
	}
}