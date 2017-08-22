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
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	return cardsToReturn;
}

function levelTwo() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	cardsToReturn.push(new card("king","spades","images/KS.svg"));
	cardsToReturn.push(new card("king","spades","images/KS.svg"));
	cardsToReturn.push(new card("queen","clubs","images/QC.svg"));
	cardsToReturn.push(new card("queen","clubs","images/QC.svg"));
	return cardsToReturn;
}

function levelThree() {
	var cardsToReturn = [];
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("king","diamonds","images/KD.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	cardsToReturn.push(new card("queen","hearts","images/QH.svg"));
	cardsToReturn.push(new card("king","spades","images/KS.svg"));
	cardsToReturn.push(new card("king","spades","images/KS.svg"));
	cardsToReturn.push(new card("queen","clubs","images/QC.svg"));
	cardsToReturn.push(new card("queen","clubs","images/QC.svg"));
	cardsToReturn.push(new card("jack","diamonds","images/JD.svg"));
	cardsToReturn.push(new card("jack","diamonds","images/JD.svg"));
	cardsToReturn.push(new card("jack","hearts","images/JH.svg"));
	cardsToReturn.push(new card("jack","hearts","images/JH.svg"));
	cardsToReturn.push(new card("ace","spades","images/AS.svg"));
	cardsToReturn.push(new card("ace","spades","images/AS.svg"));
	cardsToReturn.push(new card("ace","clubs","images/AC.svg"));
	cardsToReturn.push(new card("ace","clubs","images/AC.svg"));
	return cardsToReturn;
}