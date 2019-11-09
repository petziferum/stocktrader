<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>Trade or View your Portfolio</v-card-title>
      You may save or Load you Data<br>
      <hr>
      <p>Your Funds: {{ funds }}</p>
    </v-card>
  </v-container>
</template>

<script>
export default {
 

  data: () => ({

  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
