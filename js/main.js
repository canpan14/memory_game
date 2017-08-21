var cards = [];
var cardsInPlay = [];
var idsOfCardsFound = [];
var currentScore = 0;
var currentLevel = 1;
var maxLevel = 3;
var cardBackSrc = "images/red-back.jpg";
var resetWhileSleeping = false;

/*
 * https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var checkForMatch = function() {
	var isMatch = false;
	var cardToMatchAgainst = cards[cardsInPlay[0][0]];
	for(var i = 1; i < cardsInPlay.length; i++){
		if(cardToMatchAgainst.rank !== cardsInPlay[i][1] || cardToMatchAgainst.suit !== cards[cardsInPlay[i][0]].suit){
			isMatch = false;
			return false;
		}
	}
	return true;
};

async function flipCard() {
	if(cardsInPlay.length < 2) {
		this.removeEventListener("click", flipCard);
		var cardId = this.getAttribute("data-id");
		cardsInPlay.push([cardId, cards[cardId].rank]);
		this.setAttribute("src", cards[cardId].cardImage);
		if(cardsInPlay.length === 2){			
			var isMatch = checkForMatch();
			if(isMatch) {
				currentScore += 10;
				updateCurrentScore();
				match();
			} else {
				resetWhileSleeping = false;
				currentScore -= 5;
				updateCurrentScore();
				await sleep(1250);
				if(!resetWhileSleeping) {
					noMatch();
				}
			}
		}
	}
}

var match = function() {
	cardsInPlay.forEach(function(matchedCard) {
		idsOfCardsFound.push(matchedCard[0]);
	});
	cardsInPlay.length = 0;
	checkForEndOfGame();
};

var noMatch = function() {
	cardsInPlay.forEach(function(cardToReset) {
		var idOfCard = cardToReset[0];
		if(!idsOfCardsFound.includes(idOfCard)){
			document.querySelector('[data-id=\"' + idOfCard + '\"]').setAttribute("src", cardBackSrc);
			document.querySelector('[data-id=\"' + idOfCard + '\"]').addEventListener("click", flipCard);
		}
	});
	cardsInPlay.length = 0;
};

var checkForEndOfGame = function() {
	if(idsOfCardsFound.length === cards.length) {
		if(currentLevel !== maxLevel) {
			document.getElementById("nextLevel").disabled = false;
			updateHighScore();
		} else {
			// Other end of game stuff
			updateHighScore();
		}
	}
}

var updateCurrentScore = function() {
	document.getElementById("score").textContent = currentScore;
};

var updateHighScore = function() {
	var currentHighScore = localStorage.getItem("highScore");
	if(currentHighScore !== null) {
		if(currentScore > currentHighScore) {
			localStorage.setItem("highScore", currentScore);
			document.getElementById("highScore").textContent = currentScore;
		}
	} else {
		localStorage.setItem("highScore", currentScore);
		document.getElementById("highScore").textContent = currentScore;
	}
};

var updateLevel = function() {
	if(currentLevel !== maxLevel) {
		document.getElementById("level").textContent = currentLevel;
	} else {
		document.getElementById("level").textContent = currentLevel + " (Last)";
	}
}

var createBoard = function() {
	for(var i = 0; i < cards.length; i++){
		var cardToAdd = document.createElement("img");
		cardToAdd.setAttribute("src", cardBackSrc);
		cardToAdd.setAttribute("data-id", i);
		cardToAdd.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardToAdd);
	}
	resizeCards();
};

var resizeCards = function() {
	var cardElements = document.getElementsByTagName('img');
	var cardWidth = "178px";
	if(cardElements.length === 4 || cardElements.length === 8) {
		cardWidth = "178px";
	} else if(cardElements.length % 8 === 0) {
		cardWidth = "85px";
	} else if(cardElements.length % 6 == 0) {
		cardWidth = "116px";
	} 
	for(let i = 0; i < cardElements.length; i++){
		cardElements[i].style.width = cardWidth;
	}
}

var initializeHighScoreDisplay = function() {
	if(localStorage.getItem("highScore") === null) {
		localStorage.setItem("highScore", 0);
	}
	document.getElementById("highScore").textContent = localStorage.getItem("highScore");
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
}

function nextLevel() {
	document.getElementById("nextLevel").disabled = true;
	var cardElements = document.getElementById("game-board").childNodes;
	cardsInPlay.length = 0;
	idsOfCardsFound.length = 0;
	for(var i = cardElements.length - 1; i >= 0; i--){
		cardElements[i].remove();
	}
	currentLevel += 1;
	updateLevel();
	cards = getCardsForLevel(currentLevel);
	shuffle(cards);
	createBoard();
}

function resetGame() {
	resetWhileSleeping = true;
	document.getElementById("nextLevel").disabled = true;
	currentLevel = 1;
	updateLevel();
	cards = getCardsForLevel(1);
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

function resetHighScore() {
	localStorage.setItem("highScore", 0);
	document.getElementById("highScore").textContent = "0";
}

cards = getCardsForLevel(currentLevel);
shuffle(cards);
createBoard();
initializeHighScoreDisplay();

