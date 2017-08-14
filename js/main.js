var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];
var idsOfCardsFound = [];
var currentScore = 0;

/*
 * https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


var checkForMatch = function() {
	var isMatch = false;
	var cardToMatchAgainst = cardsInPlay[0];
	for(var i = 1; i < cardsInPlay.length; i++){
		if(cardToMatchAgainst[1] !== cardsInPlay[i][1]){
			isMatch = false;
			noMatch();
			return;
		}
	}
	match();
	return;
};

var flipCard = function() {
	this.removeEventListener("click", flipCard);
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push([cardId, cards[cardId].rank]);
	this.setAttribute("src", cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
		await sleep(1000);
		checkForMatch();
		updateCurrentScore();
	}
};

var match = function() {
	currentScore += 10;
	cardsInPlay.forEach(function(matchedCard) {
		idsOfCardsFound.push(matchedCard[0]);
	});
	cardsInPlay.length = 0;
	checkForEndOfGame();
};

var noMatch = function() {
	currentScore -= 5;
	cardsInPlay.forEach(function(cardToReset) {
		var idOfCard = cardToReset[0];
		if(!idsOfCardsFound.includes(idOfCard)){
			document.querySelector('[data-id=\"' + idOfCard + '\"]').setAttribute("src", "images/back.png");
			document.querySelector('[data-id=\"' + idOfCard + '\"]').addEventListener("click", flipCard);
		}
	});
	cardsInPlay.length = 0;
};

var checkForEndOfGame = function() {
	if(idsOfCardsFound.length === cards.length) {
		updateHighScore();
		resetGame();
	}
}

var updateCurrentScore = function() {
	document.getElementById("score").textContent = currentScore;
}

var updateHighScore = function() {
	var currentHighScore = document.getElementById("highScore").textContent;
	if(currentScore > currentHighScore) {
		document.getElementById("highScore").textContent = currentScore;
	}
}

var createBoard = function() {
	for(var i = 0; i < cards.length; i++){
		var cardToAdd = document.createElement("img");
		cardToAdd.setAttribute("src", "images/back.png");
		cardToAdd.setAttribute("data-id", i);
		cardToAdd.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardToAdd);
	}
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
};

function resetGame() {
	shuffle(cards);
	var cardElements = document.getElementById("game-board").childNodes;
	cardsInPlay.length = 0;
	idsOfCardsFound.length = 0;
	for(var i = cardElements.length - 1; i >= 0; i--){
		cardElements[i].remove();
	}
	currentScore = 0;
	updateCurrentScore();
	createBoard();
}

shuffle(cards);
createBoard();