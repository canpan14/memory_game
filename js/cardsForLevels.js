function getCardsForLevel(levelNumber) {
	switch(levelNumber) {
	case 1:
		return levelOne();
		break;
	case 2:
		return levelTwo();
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
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.png"));
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.png"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.png"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.png"));
	return cardsToReturn;
}

function levelTwo() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.png"));
	cardsToReturn.push(new card("king","diamonds","images/king-of-diamonds.png"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.png"));
	cardsToReturn.push(new card("queen","hearts","images/queen-of-hearts.png"));
	cardsToReturn.push(new card("king","hearts","images/king-of-hearts.png"));
	cardsToReturn.push(new card("king","hearts","images/king-of-hearts.png"));
	cardsToReturn.push(new card("queen","diamonds","images/queen-of-diamonds.png"));
	cardsToReturn.push(new card("queen","diamonds","images/queen-of-diamonds.png"));
	return cardsToReturn;
}