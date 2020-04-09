<template>
  <v-card :color="color" style="height:100%;width:100%">
    <v-card-text class="text-center">
      <h3>{{ name }}</h3>
    </v-card-text>
    <v-layout class="pa-2" row>
      <v-flex v-for="h in hand" :key="h.handId" xs2>
        <div v-if="h.suit">
          <div v-if="h.show">
            <PlayingCard :suit="h.suit" :name="h.name" :color="h.color"></PlayingCard>
          </div>
          <div v-else>
            <CardReturned :isDistributed="true"></CardReturned>
          </div>
        </div>
        <div v-else>
          <CardReturned :isDistributed="false"></CardReturned>
        </div>
      </v-flex>
      <v-card-text class="text-center">{{ score }} Points</v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
import CardReturned from "./CardReturned";
import PlayingCard from "./PlayingCard";

export default {
  name: "PlayerDeck",
  components: {
    CardReturned,
    PlayingCard
  },
  props: ["hand", "score", "color", "name"],
  data: () => ({})
};
</script>
