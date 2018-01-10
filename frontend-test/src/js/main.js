var Result = { "win": 1, "loss": 2, "tie": 3 };

var PokerHand = function() {

};

PokerHand.prototype.compareWith = function(hand) {
	return Result.tie;
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
