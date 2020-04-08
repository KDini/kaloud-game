<template>
  <v-container grid-list-md fluid style="height:100%;width:100%">
    <v-layout row style="height:100%;width:100%">
      <v-flex xs4>
        <PlayerDeck :color="players[0].color" :name="players[0].name" :hand="players[0].hand" :score="players[0].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[1].color" :name="players[1].name" :hand="players[1].hand" :score="players[1].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[2].color" :name="players[2].name" :hand="players[2].hand" :score="players[2].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[3].color" :name="players[3].name" :hand="players[3].hand" :score="players[3].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <v-card flat color="transparent" style="height:100%;width:100%">
          <v-card-text class="text-center">4 cartes dans la pioche</v-card-text>
          <v-layout row>
            <v-flex xs6>
              <CardReturned :isDistributed="true"></CardReturned>
            </v-flex>
            <v-flex xs6>
              <PlayingCard suit="♦" name="K" color="red--text"></PlayingCard>
            </v-flex>
          </v-layout>
          <v-card-actions class="justify-center">
            <v-btn color="orange" text>Sortilège</v-btn>
            <v-btn color="orange" text>Kaloud</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[4].color" :name="players[4].name" :hand="players[4].hand" :score="players[4].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[5].color" :name="players[5].name" :hand="players[5].hand" :score="players[5].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[6].color" :name="players[6].name" :hand="players[6].hand" :score="players[6].score"></PlayerDeck>
      </v-flex>
      <v-flex xs4>
        <PlayerDeck :color="players[7].color" :name="players[7].name" :hand="players[7].hand" :score="players[7].score"></PlayerDeck>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import PlayingCard from "../components/PlayingCard";
import CardReturned from "../components/CardReturned";
import PlayerDeck from "../components/PlayerDeck";

export default {
  name: "Game",
  components: {
    PlayingCard,
    CardReturned,
    PlayerDeck
  },
  data: () => ({
    names: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    suits: ["♥", "♦", "♠", "♣"],
    cards: [],
    players: [
      {
        id: 1,
        color: "#ff9ff3",
        name: "Hassan",
        hand: [
          { handId: 1, suit: "♦", name: "A", color: "red--text", show: false },
          { handId: 2, suit: "♦", name: "2", color: "black--text", show: false },
          { handId: 3, suit: "♦", name: "4", color: "black--text", show: false  },
          { handId: 4, suit: "♦", name: "4", color: "black--text", show: false },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 76
      },
      {
        id: 2,
        color: "#feca57",
        name: "Nadim",
        hand: [
          { handId: 1, suit: "♦", name: "A", color: "red--text", show: false },
          { handId: 2},
          { handId: 3, suit: "♦", name: "4", color: "black--text", show: false  },
          { handId: 4, suit: "♦", name: "4", color: "black--text", show: false },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 7
      },
      {
        id: 3,
        color: "#ff6b6b",
        name: "Kuntol",
        hand: [
          { handId: 1, suit: "♦", name: "A", color: "red--text", show: false },
          { handId: 2},
          { handId: 3},
          { handId: 4, suit: "♦", name: "4", color: "black--text", show: false },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 98
      },
      {
        id: 4,
        color: "#48dbfb",
        name: "Dini",
        hand: [
          { handId: 1},
          { handId: 2},
          { handId: 3},
          { handId: 4, suit: "♦", name: "4", color: "black--text", show: false },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 57
      },
      {
        id: 5,
        color: "#1dd1a1",
        name: "Mueen",
        hand: [
          { handId: 1, suit: "♦", name: "A", color: "red--text", show: true },
          { handId: 2, suit: "♦", name: "2", color: "black--text", show: true },
          { handId: 3 },
          { handId: 4, suit: "♦", name: "4", color: "black--text", show: true },
          { handId: 5, suit: "♦", name: "5", color: "black--text", show: false },
          { handId: 6, suit: "♦", name: "6", color: "red--text", show: true }
        ],
        score: 40
      },
      {
        id: 6,
        color: "#8c7ae6",
        name: "Onik",
        hand: [
          { handId: 1, suit: "♦", name: "A", color: "red--text", show: true },
          { handId: 2, suit: "♦", name: "2", color: "black--text", show: true },
          { handId: 3 },
          { handId: 4 },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 76
      },
      {
        id: 7,
        color: "#c8d6e5",
        name: "TazHos",
        hand: [
          { handId: 1 },
          { handId: 2, suit: "♦", name: "2", color: "black--text", show: false },
          { handId: 3 },
          { handId: 4 },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 76
      },
      {
        id: 8,
        color: "#8395a7",
        name: "Sadly",
        hand: [
          { handId: 1 },
          { handId: 2 },
          { handId: 3 },
          { handId: 4 },
          { handId: 5 },
          { handId: 6 }
        ],
        score: 8
      }
    ]
  })
};
</script>


<style>
.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
}
</style>