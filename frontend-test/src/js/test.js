// Possible card number inputs
var numInputs = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// Possible suit inputs
var suitInputs = ['C', 'D', 'H', 'S'];


// define variables
var handInput = ['9H', '6D', 'TC', '7H', '3S'];
var hand = [];
var cardNumbers = [];
var cardSuits = [];

var createHand = function() {
	for (var i = 0; i < handInput.length; i++) {
		cardNumbers[i] = numInputs.indexOf(handInput[i][0]) + 1;
		cardSuits[i] = suitInputs.indexOf(handInput[i][1]) + 1	
	}
	console.log(cardNumbers);
	console.log(cardSuits);
}

createHand();