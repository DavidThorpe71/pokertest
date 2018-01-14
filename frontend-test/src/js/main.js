var Result = { "win": 1, "loss": 2, "tie": 3 };

var PokerHand = function(hand) {
	this.hand = hand;
};

PokerHand.prototype.compareWith = function(otherHand) {
	var hand1 = createHand(this.hand);
	var hand2 = createHand(otherHand.hand);

	if (hand1[1] > hand2[1]) {
		return [Result.win, hand1[0]];
	} else if (hand1[1] < hand2[1]) {
		return [Result.loss, hand2[0]];
	} else {
		return [Result.tie, hand1[0], hand2[0]];
	};
};


// for (var i = 0; i < 2; i++) {
// 	var newHand = document.createElement('DIV');
// 	newHand.setAttribute('id', `hand_${i}`);
// 	newHand.setAttribute('class', `hand`);
// 	document.getElementById('cardInputs').appendChild(newHand);
// 	newHand.innerHTML = `<div class="handText">Enter cards for Player ${i + 1}: </div>`;
// 	for (var j = 0; j < 5; j++){
// 		var newCard = document.createElement('INPUT');
// 		newCard.setAttribute('class', 'card');
// 		newCard.setAttribute('id', `hand${i}_card${j}`);
// 		newCard.setAttribute('maxlength', '2');
// 		document.getElementById(`hand_${i}`).appendChild(newCard);
// 	}
// }


var newHandHtml = '';

for (var i = 0; i < 2; i++) {
	newHandHtml += `
		<div id="hand_${i}" class="hand">
			<div class="handText">Enter cards for Player ${i + 1}: </div>
			<div class="cards">`;
	for (var j = 0; j < 5; j++){
		newHandHtml += `<input id="hand${i}_card${j}" class="card" maxlength="2"></input>`
	}
	newHandHtml += `</div></div>`;
}
document.getElementById(`cardInputs`).innerHTML = newHandHtml;


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