var cards = initCards();
var shuffledCards = shuffleCards(cards);
var players = initPlayers();
var cardsStack = [];
var drawCardsStack = [];

/**
 * Fonction qui crée les cartes
 */
function initCards() {
    let id = 1;
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let symbols = ["♥", "♦", "♠", "♣"];
    let allCards = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            let card = {
                id: id,
                number: numbers[i],
                symbol: symbols[j]
            }
            allCards.push(card);
            id++;
        }
    }
    return allCards;
}

/**
 * Fonction pour mélanger les cartes
 * @param {Array<Object>} cards 
 */
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
}

/**
 * 
 * @param {Array} shuffledCards 
 * @param {Object} players 
 */
function distributeCards(shuffledCards, player) {
    for (let i = 0; i < player.length; i++) {
        for (let j = 0; j < 4; j++) {
            let randomCard = randomCardInCards(shuffledCards);
            console.log('random card', randomCard);
            player[i].hand.push(randomCard);
            let indexOfCard = shuffledCards.map(function (card) {
                return card.id
            }).indexOf(randomCard.id);
            shuffledCards.splice(indexOfCard, 1);
            drawCardsStack = shuffledCards;
        }
    }
}

/**
 * Fonction pour sélectionner une carte aléatoire
 * @param {Array} cards 
 */
function randomCardInCards(cards) {
    return cards[Math.floor(Math.random() * cards.length)];
}

/**
 * Fonction jouer une ou plusieurs cartes
 * @param {Object} player 
 * @param {Array<Object>} cardsToBePlayed 
 */
function playCard(player, cardsToBePlayed) {
    cardsToBePlayed.map((cardTbp) => {
        player.hand.splice(cardTbp, 1);
        cardsStack.push(cardTbp);
        checkGameEnd(player);
    })
    console.log('Joueur', player.name, 'lui reste', player.hand);
}

/**
 * Check si le jeu est fini en vérifiant le nombre de cartes en main du joueur
 * @param {Object} player 
 */
function checkGameEnd(player) {
    if(player.hand.length === 0) {
        console.log('Le jeu est finit');
    } else {
        return;
    }
}


/**
 * TODO fonction piocher une carte
 * @param {Object} player 
 * @param {Array<Object>} drawCardsStack 
 */
function drawCard(player, drawCardsStack) {
    let randomCard = randomCardInCards(drawCardsStack);
    console.log('carte piochée: ', randomCard);
    // TODO Checker si le joueur joue ou garde la carte
    let indexOfCard = drawCardsStack.map(function (card) {
        return card.id
    }).indexOf(randomCard.id);
    drawCardsStack.splice(indexOfCard, 1);
    player.hand.push(randomCard);
}

// fonction création des joueurs
function initPlayers() {
    let players = [];
    let j1 = {
        id: 1,
        name: "Mueen",
        hand: []
    };
    let j2 = {
        id: 2,
        name: "Dini",
        hand: []
    };
    let j3 = {
        id: 2,
        name: "Kun",
        hand: []
    };
    let j4 = {
        id: 2,
        name: "Sadly",
        hand: []
    };
    let j5 = {
        id: 2,
        name: "Nadim",
        hand: []
    };
    players.push(j1);
    players.push(j2);
    players.push(j3);
    players.push(j4);
    players.push(j5);
    return players;
}

console.log(cards);
console.log(shuffledCards);
distributeCards(shuffledCards, players);
console.log('La pioche: ', drawCardsStack.length);
console.log('player1 hand: ', players[0].hand);
console.log('player2 hand: ', players[1].hand);
console.log('player3 hand: ', players[2].hand);

playCard(players[0], [players[0].hand[0], players[0].hand[1]]);
playCard(players[2], [players[2].hand[2], players[2].hand[1], players[2].hand[3], players[2].hand[0]]);
playCard(players[1], [players[1].hand[0], players[1].hand[1]]);

drawCard(players[0], drawCardsStack);

console.log('player', players[0].name, 'a pioché une nouvelle carte', players[0].hand);

console.log('Pile de cartes: ',cardsStack);
