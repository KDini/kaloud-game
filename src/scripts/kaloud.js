var cards = initCards();
var players = initPlayers();

console.log(shuffleDeck(cards));

/**
 * Mélange le jeu de carte
 * @param {Array(Object)} cards 
 */
function shuffleDeck(cards) {        
    for(let i = cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let temp = cards[i];
      cards[i] = cards[randomIndex];
      cards[randomIndex] = temp;
    }
    return cards;
}
/**
 * Initie le jeu avec 4 cartes par joueur
 * @param {Array(Player)} players 
 * @param {Array(Object)} cards 
 */
function initGame(players, cards) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < 4; j++) {
      let randomCard = randomCardInCards(cards);
      players[i].hand.push(randomCard);
      removeCardById(cards, randomCard.id);
    }
  }
  return players;
}
/**
 * Supprime une carte dans la liste des cartes
 * @param {Array(cards)} cards
 * @param {Number} id
 */
function removeCardById(cards, id) {
  return cards.filter(card => {
    return card.id != id;
  });
}
/**
 * Retourne une carte aléatoire
 * @param {Card} cards
 */
function randomCardInCards(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}
/**
 * Retourne une liste de joueurs
 */
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
  players.push(j1);
  players.push(j2);
  return players;
}

/**
 * retourne un jeu de 52 cartes
 */
function initCards() {
  let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["♥", "♦", "♠", "♣"];
  let cards = [];
  let suitColor = {
    "♠": "black",
    "♣": "black",
    "♦": "red",
    "♥": "red"
  };
  let id = 1;
  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      let card = {
        id: id,
        rank: ranks[r],
        suit: suits[s]
      };
      cards.push(card);
      id++;
    }
  }
  return cards;
}


initGame(players, cards);
console.log(players[0].hand);
console.log(cards.length);

