<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-1" color="darkblue" max-width="300px" min-width="300">
        <v-img :src="require('../../assets/img.jpg')" :aspect-ratio="16/9" max-width="100%"></v-img>
        <v-card-title>{{movieTitle}}</v-card-title>
        <v-card-subtitle>{{typ}}</v-card-subtitle>
        <v-card-text>{{id}}</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-slider
                v-model="id"
                class="align-center"
                max="100"
                min="10"
                hide-details
        ></v-slider>
        <v-text-field class="ma-3" label="newmovie" v-model="movieTitle">
        </v-text-field>
          <v-radio-group v-model="typ" :mandatory="false">
            <v-radio label="Serie" value="Serie"></v-radio>
            <v-radio label="Film" value="Film"></v-radio>
          </v-radio-group>
          <v-card-actions class="justify-center">
            <v-btn @click.prevent="addMovie">Add new Movie</v-btn>
          </v-card-actions>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in items" :key="item.id">
        <app-movie :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  name: "Movies",
  data:() => ({
    movieTitle: '',
    typ: '',
    id: ''
  }),
  components: {
    appMovie: Movie
  },
  methods: {
    addMovie() {
      const movieData = {
        id: this.id,
        title: this.movieTitle,
        type: this.typ,
        img: ""
      };
      this.$store.dispatch("addMovie", movieData);
      this.movieTitle = '';
      this.typ = null;
    }
  },
  computed: {
    items() {
      return this.$store.getters.data;
    },
  }
};
</script>

<style scoped></style>
