// Possible card number inputs
var numInputs = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// Possible suit inputs
var suitInputs = ['C', 'D', 'H', 'S'];


// define variables
var handInput = ['2H', '2H', '2H', '5H', '5H'];
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


	//Find cards with same number
	function duplicateNumber() {
		var countArray = [];
		var uniqueArray = [];
		var previousCard;
		
		for (var i = 0; i < 5; i++) {
			console.log(`before if log = ${previousCard}`);
			if (sortedCardNumbers[i] !== previousCard) {
				uniqueArray.push(sortedCardNumbers[i]);
				countArray.push(1);
			} else {
				countArray[countArray.length - 1]++;
			}
			previousCard = sortedCardNumbers[i];
			console.log(`after if log = ${previousCard}`);
		}
		return [uniqueArray, countArray];	
	}
	console.log(duplicateNumber());
}

defineHand();