<template>
    <v-layout class="pa-2" row>
      <v-flex v-for="h in hand" :key="h.id" xs2>
        <CardReturned :isReturned="true">{{h.id}}</CardReturned>
      </v-flex>
      <v-card-text class="text-center">{{ score }} Points</v-card-text>
    </v-layout>
</template>

<script>
import CardReturned from './CardReturned';

export default {
  name: "CardReturned",
  components: {
      CardReturned,
  },
  props: [ "hand", "score"],
  data: () => ({})
};
</script>
