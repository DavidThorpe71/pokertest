var Result = { "win": 1, "loss": 2, "tie": 3 };

var PokerHand = function(hand) {
	this.hand = hand;
};

PokerHand.prototype.compareWith = function(otherHand) {
	var hand1 = createHand(this.hand);
	var hand2 = createHand(otherHand.hand);

	console.log(hand1);
	console.log(hand2);

};


for (var i = 0; i < 2; i++) {
	var newHand = document.createElement('DIV');
	newHand.setAttribute('id', `hand_${i}`);
	newHand.setAttribute('class', `hand`);
	document.getElementById('cardInputs').appendChild(newHand);
	newHand.innerHTML = `Enter cards for Player ${i + 1}`;
	for (var j = 0; j < 5; j++){
		var newCard = document.createElement('INPUT');
		newCard.setAttribute('class', 'card');
		newCard.setAttribute('id', `hand${i}_card${j}`);
		newCard.setAttribute('maxlength', '2');
		document.getElementById(`hand_${i}`).appendChild(newCard);
	}
}


function getCards() {
	var hand0 = [];
	var hand1 = [];
	
	for (var i = 0; i < 5; i++) {
		hand0[i] = document.getElementById(`hand0_card${i}`).value.toUpperCase();
		hand1[i] = document.getElementById(`hand1_card${i}`).value.toUpperCase();
	}

	//Create two player objects
	const playerOne = new PokerHand(hand0);
	const playerTwo = new PokerHand(hand1);

	//Display results
	document.getElementById("outcome").innerHTML = playerOne.compareWith(playerTwo);
}