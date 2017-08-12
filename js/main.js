var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "image/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "image/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "image/king-of-diamonds.png"
}];
var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log("Suit was " + cards[cardId].suit);
	console.log("Suit was " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2){
		checkForMatch();
		cardsInPlay.length = 0;
	} else {
		// Wait for two cards to be flipped
	}
};

flipCard(0);
flipCard(1);