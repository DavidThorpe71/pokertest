// Possible card number inputs
var numInputs = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// Possible suit inputs
var suitInputs = ['C', 'D', 'H', 'S'];


// define variables
var handInput = ['2H', '3H', '6H', '5H', '3H'];
var hand = [];
var cardNumbers = [];
var cardSuits = [];

// Convert hand from numbers and letters to numbers and put in seperate arrays to analyse hand outcome
var createHand = function() {
	for (var i = 0; i < handInput.length; i++) {
		cardNumbers[i] = numInputs.indexOf(handInput[i][0]) + 1;
		cardSuits[i] = suitInputs.indexOf(handInput[i][1]) + 1	
	}
	console.log(cardNumbers);
	console.log(cardSuits);
}

createHand();

// Function in which hand is defined (e.g. Flush, Pair etc)
var defineHand = function() {

	var sortedCardNumbers = cardNumbers.sort();
	var sortedCardSuits = cardSuits.sort();

	//Test if hand is straight
	function straight() {
		for (var i = 0; i < 4; i++) {
			if (sortedCardNumbers[i] + 1 !== sortedCardNumbers[i + 1]) {
				return false;
			}
		}
		return true;
	}

	//Test if hand is flush
	function flush() {
		for (var i = 0; i < 4; i++) {
			if (sortedCardSuits[i] !== sortedCardSuits[i + 1]) {
				return false;
			}
		}
		return true;
	}
	console.log(flush());

	//Find cards with same number
	function duplicateNumber() {
		for (var i = 0; i < 4; i++) {
			var count = 0;
			for (var j = 0; j < 4; j++){
				if (cardNumbers[i] === cardNumbers[j]) {
					count++
				}
			}
			if count > 0 {
				var a = new Object();

			}
		}
	}

}

defineHand();