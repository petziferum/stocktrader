<template>
  <v-row>
    <v-col v-for="item in items" :key="item.id">
      <app-movie :item="item" />
    </v-col>
  </v-row>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  name: "Movies",
  components: {
    appMovie: Movie
  },
  computed: {
    items() {
      return this.$store.getters.data;
    }
  }
};
</script>

<style scoped></style>
