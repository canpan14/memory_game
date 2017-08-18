function getCardsForLevel(levelNumber) {
	switch(levelNumber) {
	case 1:
		return levelOne();
		break;
	case 2:
		return levelTwo();
		break;
	case 3:
		return levelThree();
		break;
	default:
		return [];
	}
}

function card(rank, suit, cardImage){ 
	this.rank = rank;
	this.suit = suit;
	this.cardImage = cardImage;
}

function levelOne() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	return cardsToReturn;
}

function levelTwo() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	cardsToReturn.push(new card("king","spades","images/king-of-spades.bmp"));
	cardsToReturn.push(new card("king","spades","images/king-of-spades.bmp"));
	cardsToReturn.push(new card("queen","clubs","images/queen-of-clubs.bmp"));
	cardsToReturn.push(new card("queen","clubs","images/queen-of-clubs.bmp"));
	return cardsToReturn;
}

function levelThree() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.bmp"));
	cardsToReturn.push(new card("king","spades","images/king-of-spades.bmp"));
	cardsToReturn.push(new card("king","spades","images/king-of-spades.bmp"));
	cardsToReturn.push(new card("queen","clubs","images/queen-of-clubs.bmp"));
	cardsToReturn.push(new card("queen","clubs","images/queen-of-clubs.bmp"));

	cardsToReturn.push(new card("jack","diamonds","images/jack-of-diamonds.bmp"));
	cardsToReturn.push(new card("jack","diamonds","images/jack-of-diamonds.bmp"));
	cardsToReturn.push(new card("jack","hearts","images/jack-of-hearts.bmp"));
	cardsToReturn.push(new card("jack","hearts","images/jack-of-hearts.bmp"));
	cardsToReturn.push(new card("ace","spades","images/ace-of-spades.bmp"));
	cardsToReturn.push(new card("ace","spades","images/ace-of-spades.bmp"));
	cardsToReturn.push(new card("ace","clubs","images/ace-of-clubs.bmp"));
	cardsToReturn.push(new card("ace","clubs","images/ace-of-clubs.bmp"));
	return cardsToReturn;
}