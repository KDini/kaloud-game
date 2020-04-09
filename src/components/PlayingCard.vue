<template>
  <v-card class="mx-auto" width="50" height="80">
    <div class="card">
      <span class="card__suit card__suit--top" :class="color">{{suit}}</span>
      <span class="card__number" :class="color">{{name}}</span>
      <span class="card__suit card__suit--bottom" :class="color">{{suit}}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "PlayingCard",
  props: ['suit', 'name', 'color'],
  data: () => ({
    
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

<style scoped>
  .card:hover {
    cursor: pointer;
  }
</style>