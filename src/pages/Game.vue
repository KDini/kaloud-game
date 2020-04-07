<template>
  <v-container grid-list-md fluid style="height:100%;width:100%">
    <v-layout row style="height:100%;width:100%">
      <v-flex xs4>
        <v-card color="#ff9ff3" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 1</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">76 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="#feca57" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 2</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">7 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="#ff6b6b" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 3</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">98 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="#48dbfb" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 4</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">57 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card flat color="transparent" style="height:100%;width:100%">
          <v-card-text class="text-center">4 cartes dans la pioche</v-card-text>
          <v-layout row>
            <v-flex xs6>
              <CardReturned :isReturned="true"></CardReturned>
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
        <v-card color="#1dd1a1" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 5</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-flex xs2><CardReturned :isReturned="true"></CardReturned></v-flex>
            <v-card-text class="text-center">45 Points</v-card-text>
          </v-layout>
        </v-card>
        
        <!-- <PlayerDeck :color="p1.color" :name="p1.name" :hand="p1.hand" :score="p1.score"></PlayerDeck> -->
      </v-flex>
      <v-flex xs4>
        <v-card color="#8c7ae6" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 6</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">76 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="#c8d6e5" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 7</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="true"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">76 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card color="#8395a7" style="height:100%;width:100%">
          <v-card-text class="text-center">
            <h3>Name 8</h3>
          </v-card-text>
          <v-layout class="pa-2" row>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-flex xs2>
              <CardReturned :isReturned="false"></CardReturned>
            </v-flex>
            <v-card-text class="text-center">76 Points</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import PlayingCard from "../components/PlayingCard";
import CardReturned from "../components/CardReturned";
// import PlayerDeck from "../components/PlayerDeck";

export default {
  name: "Game",
  components: {
    PlayingCard,
    CardReturned,
    // PlayerDeck
  },
  data: () => ({
    names: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    suits: ["♥", "♦", "♠", "♣"],
    cards: [],
    p1: {
      id: 1,
      color: "#ff9ff3",
      name: "Mueen",
      hand: [
        { id: 1, name: "test" },
        { id: 2, name: "test" },
        { id: 3, name: "test" },
        { id: 4, name: "test" },
        { id: 5, name: "test" },
        { id: 6, name: "test" }
      ],
      score: 40
    },
    p2: {
      id: 2,
      color: "#feca57",
      name: "Dini",
      hand: [],
      score: 0
    },
    p3: {
      id: 3,
      color: "#ff6b6b",
      name: "Sadly",
      hand: [],
      score: 0
    }
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