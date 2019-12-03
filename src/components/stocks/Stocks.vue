<template>
  <v-row>
    <v-col v-for="stock in stocks" :key="stock.id">
      <v-slide-y-transition>
        <app-stock :stock="stock"></app-stock>
      </v-slide-y-transition>
    </v-col>
  </v-row>
</template>

<script>
import Stock from "./Stock";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>