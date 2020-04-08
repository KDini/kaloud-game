<template>
<div>
  <v-card v-if="isDistributed" dark class="mx-auto" width="50" height="80">
    <v-img src="../assets/dini.png" height="80px" />
  </v-card>
  <v-card v-else outlined class="mx-auto" width="50" height="80"></v-card>
</div>
</template>
<script>
export default {
  name: "CardReturned",
  props: ['isDistributed'],
  data: () => ({
    
  })
};
</script>
