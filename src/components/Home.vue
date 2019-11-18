<template>
  <v-container>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card class="pa-0" :elevation="hover ? 12 : 1">
          <v-img class="white--text align-end ma-0" height="200px" src="../assets/bgimg.jpg">
            <v-card-title>Trade or View your Portfolio</v-card-title>
            <v-card-subtitle class="white--text">You may save or Load you Data</v-card-subtitle>
            <br />
            <hr />
            <v-card-title primary-title>
              <p>Your Funds: {{ funds | currency }}</p>
            </v-card-title>
          </v-img>
        </v-card>
      </template>
    </v-hover>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      bgImage: require("../assets/bgimg.jpg")
    }),
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  };
</script>
<style scoped>
</style>