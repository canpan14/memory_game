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
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	return cardsToReturn;
}

function levelTwo() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	cardsToReturn.push(new card("king","spades","images/ks.svg"));
	cardsToReturn.push(new card("king","spades","images/ks.svg"));
	cardsToReturn.push(new card("queen","clubs","images/qc.svg"));
	cardsToReturn.push(new card("queen","clubs","images/qc.svg"));
	return cardsToReturn;
}

function levelThree() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("king","diamonds","images/kd.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	cardsToReturn.push(new card("queen","hearts","images/qh.svg"));
	cardsToReturn.push(new card("king","spades","images/ks.svg"));
	cardsToReturn.push(new card("king","spades","images/ks.svg"));
	cardsToReturn.push(new card("queen","clubs","images/qc.svg"));
	cardsToReturn.push(new card("queen","clubs","images/qc.svg"));
	cardsToReturn.push(new card("jack","diamonds","images/jd.svg"));
	cardsToReturn.push(new card("jack","diamonds","images/jd.svg"));
	cardsToReturn.push(new card("jack","hearts","images/jh.svg"));
	cardsToReturn.push(new card("jack","hearts","images/jh.svg"));
	cardsToReturn.push(new card("ace","spades","images/as.svg"));
	cardsToReturn.push(new card("ace","spades","images/as.svg"));
	cardsToReturn.push(new card("ace","clubs","images/ac.svg"));
	cardsToReturn.push(new card("ace","clubs","images/ac.svg"));
	return cardsToReturn;
}