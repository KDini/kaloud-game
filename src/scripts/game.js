var cards = initCards();
var shuffledCards = shuffleCards(cards);
var players = initPlayers();
var cardsStack = [];
var drawCardsStack = [];

// fonction de création des cartes
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

// fonction mélange les cartes
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
}

// fonction distribution des cartes
function distributeCards(shuffledCards, players) {
    for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < 4; j++) {
            let randomCard = randomCardInCards(shuffledCards);
            console.log('random card', randomCard);
            players[i].hand.push(randomCard);
            let indexOfCard = shuffledCards.map(function (card) {
                return card.id
            }).indexOf(randomCard.id);
            shuffledCards.splice(indexOfCard, 1);
            drawCardsStack = shuffledCards;
        }
    }
}

// Select a random card
function randomCardInCards(cards) {
    return cards[Math.floor(Math.random() * cards.length)];
}

// fonction jouer une ou plusieurs cartes
function playCard(player, cardsToBePlayed) {
    cardsToBePlayed.map((cardTbp) => {
        player.hand.splice(cardTbp, 1);
        cardsStack.push(cardTbp);
        checkGameEnd(player);
    })
    console.log('Joueur', player.name, 'lui reste', player.hand);
}

// fonction check si le jeu finit
function checkGameEnd(player) {
    if(player.hand.length === 0) {
        console.log('Le jeu est finit');
    } else {
        return;
    }
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

console.log('Pile de cartes: ',cardsStack);
