diceOutput = [];
diceImages = [
	"images/dice1.png",
	"images/dice2.png",
	"images/dice3.png",
	"images/dice4.png",
	"images/dice5.png",
	"images/dice6.png",
];

function diceRoll() {
	var rollFirstDice = Math.floor(Math.random() * 6);
	var rollSecondDice = Math.floor(Math.random() * 6);
	if (rollFirstDice > rollSecondDice) {
		document.querySelector("h1").innerHTML = "Player 1 wins";
	} else if (rollSecondDice > rollFirstDice) {
		document.querySelector("h1").innerHTML = "Player 2 wins";
	} else {
		document.querySelector("h1").innerHTML = "<em>Equal roll</em>, try again";
	}
	var firstDiceRoll = document
		.querySelector(".img1")
		.setAttribute("src", diceImages[rollFirstDice]);
	var secondDiceRoll = document
		.querySelector(".img2")
		.setAttribute("src", diceImages[rollSecondDice]);
}
diceRoll();

// if (rollTheDice === 0) {
// 	console.log("must show");
// 	document.querySelector(".img1").setAttribute("src", diceImages[0]);
// }
