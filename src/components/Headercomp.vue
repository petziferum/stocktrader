<template>
  <div class="mt-12">
    <v-toolbar class="mt-4">
      <v-toolbar-title>Stocks</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn large elevation to="/">Home</v-btn>
        <v-btn large elevation to="/stocks">{{ buttontext }}</v-btn>
        <v-btn large elevation to="/portfolio" class="light-blue">Portfolio</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        Funds: {{ funds }}
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.breakpoint.lgAndUp">
          <v-btn icon>
            <v-icon>mdi-console</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-one-up</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-cash-100</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "headercomp",
  data: () => ({
    buttontext: "Stocks"
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>