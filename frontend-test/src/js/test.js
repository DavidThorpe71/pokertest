// Possible card number inputs
var numInputs = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// Possible suit inputs
var suitInputs = ['C', 'D', 'H', 'S'];


// define variables
var cardNumbers = [];
var cardSuits = [];

// Convert hand from numbers and letters to numbers and put in seperate arrays to analyse hand outcome
var createHand = function(hand) {
	for (var i = 0; i < hand.length; i++) {
		cardNumbers[i] = numInputs.indexOf(hand[i][0]) + 1;
		cardSuits[i] = suitInputs.indexOf(hand[i][1]) + 1	
	}
	
	var sortedCardNumbers = cardNumbers.sort(function(a, b){return a - b});
	var sortedCardSuits = cardSuits.sort(function(a, b){return a - b});

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

	var countArray = [];
	var uniqueArray = [];
	var previousCard;
	//Find cards with same number
	function duplicateNumber() {
		
		for (var i = 0; i < 5; i++) {
			if (sortedCardNumbers[i] !== previousCard) {
				uniqueArray.push(sortedCardNumbers[i]);
				countArray.push(1);
			} else {
				countArray[countArray.length - 1]++;
			}
			previousCard = sortedCardNumbers[i];
		}
		return [uniqueArray, countArray];
	}
	duplicateNumber();

	var sortUniArr = uniqueArray.sort(function(a, b){return a - b});
	var sortCouArr = countArray.sort(function(a, b){return a - b});

	//check for straight flush, staright and flush
	if (straight() && flush() && sortedCardNumbers[0] === 9) {
		return ['Royal Flush', 10];
	} else if (straight() && flush()) {
		return ['Straight Flush', 9];
	} else if (straight()) {
		return ['Straight' ,5];
	} else if (flush()) {
		return ['Flush', 6];
	};


	if (uniqueArray.length === 2) {
		if (sortCouArr[2] === 1) {
			return ['Four of a kind', 8];
		} else {
			return ['Full House', 7];
		};
	} else if (uniqueArray.length === 3) {
		if (sortCouArr[2] === 2) {
			return ['Two Pairs', 3];
		} else {
			return ['Three of a Kind', 4];
		}
	} else if (uniqueArray.length === 4) {
		return ['Pair', 2];
	} else if (uniqueArray.length === 5) {
		return [`high card ${numInputs[sortUniArr[4] - 1]}`, 1 + (sortedCardNumbers[4] / 13)];
		// return `high card ${numInputs[sortUniArr[4] - 1]}`
	}


	// *** Hand scoring ***
	// Royal Flush - 10
	// Straight Flush - 9
	// Four of a kind - 8
	// Full House - 7
	// Flush - 6
	// Straight - 5
	// Three of a kind - 4
	// Two pairs - 3
	// Pair - 2
	// High Card - 1
};