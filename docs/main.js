var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons(){
	// Mode button event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	// Add click listeners
		squares[i].addEventListener("click", function(){
			// Get current color
			var clickedColor = this.style.backgroundColor;
			// Compare to picked color
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	// pick new color from array
	pickedColor = pickColor();
	// update display to display new color
	colorDisplay.textContent= pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	// Generate new colors
	colors = generateRandomColors(numSquares);
	// Pick random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	// Change colors of squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

});

function changeColors(color){
	// Loop through all squares - change each color to given value
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr = [];
	// Repeat 'num' times
	// Add 'num' random colors to arr
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
		// Get random color and push into array
	}
	// Return array
	return arr;
    
}
function randomColor(){
	// pick red from 0 - 255
	var red = Math.floor(Math.random() * 256);
	// pick green from 0 - 255
	var green = Math.floor(Math.random() * 256);
	// pick blue from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	// Return RGB string
	return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}