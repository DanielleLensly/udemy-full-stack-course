var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		this.style.color = "white";

		var buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);
	});
}

document.addEventListener("keydown", function (event) {
	makeSound(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var bass = new Audio("sounds/kick-bass.mp3");
			bass.play();
			break;
		case "d":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "j":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "k":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "l":
			var tom4 = new Audio("sounds/snare.mp3");
			tom4.play();
			break;

		default:
			console.log(buttonInnerHTML);
			break;
	}
}

// Play function

// function play() {
// 	var audio = new Audio("sounds/tom-1.mp3");
// 	audio.play();
// }

//function takes char checks against switch to play sound
// and then call inside keypress listener and drum buttons
