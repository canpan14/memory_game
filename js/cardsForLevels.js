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

/**
 * https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript
 */
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages([
"images/KD.svg",
"images/KS.svg",
"images/QH.svg",
"images/QC.svg",
"images/JD.svg",
"images/JH.svg",
"images/AS.svg",
"images/AC.svg",
"images/blue-back.gif"
]);
