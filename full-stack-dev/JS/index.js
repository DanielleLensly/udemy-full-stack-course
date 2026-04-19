//fizzbuzz

var output = [];
var count = 1;

function fizzBuzz() {
	if (count % 5 === 0 && count % 3 === 0) {
		output.push("FizzBuzz");
	} else if (count % 3 === 0) {
		output.push("Fizz");
	} else if (count % 5 === 0) {
		output.push("Buzz");
	} else {
		output.push(count);
	}
	count++;
	console.log(output);
}

var output = [];
var count = 1;

function fizzBuzz() {
	while (count <= 100) {
		if (count % 5 === 0 && count % 3 === 0) {
			output.push("FizzBuzz");
		} else if (count % 3 === 0) {
			output.push("Fizz");
		} else if (count % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(count);
		}

		count++;
	}
	console.log(output);
}

//payforfood

function payForFood(names) {
	names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

	var randomNum = names[Math.floor(Math.random() * names.length)];
	// return randomNum
	return randomNum + " is going to buy lunch today!";
}

//bottlesOfBeer

function bottlesOfBeer() {
	while (count >= 0) {
		var countLess = count - 1;
		var bottleWord = "bottle";
		if (count === 1) {
			bottleWord = "bottles";
		} else if (count === 0) {
			bottleWord = "No more bottles";
			console.log(
				"No more bottles of beer on the wall, no more bottles of beer . \nGo to the store and buy some more, 99 bottles of beer on the wall.",
			);
		} else {
			console.log(
				count +
					" " +
					bottleWord +
					" of beer on the wall, " +
					count +
					" " +
					bottleWord +
					" of beer. \nTake one down and pass it around, " +
					"no more bottles of beer on the wall.",
			);
		}
		count--;
	}
}
bottlesOfBeer();

//count backwards

for (var count = 9; count >= 3; count--) {
	console.log(count);
}

//fibonacci

n = 0;

function fibonacciGenerator(n) {
	if (n === 0) {
		return [0];
	}
	if (n === 1) {
		return [0];
	}
	var output = [0, 1];
	for (var i = 2; i < n; i++) {
		output.push(output[i - 2] + output[i - 1]);
	}
	return output;
}
console.log(fibonacciGenerator[5]);
