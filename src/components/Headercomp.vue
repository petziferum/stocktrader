<template>
  <div class="mt-12">
    <v-toolbar class="mt-4">
      <v-toolbar-title>Stocks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn large elevation to="/">Home</v-btn>
        <v-btn large elevation to="/stocks">{{ buttontext }}</v-btn>
        <v-btn large elevation to="/portfolio" class="light-blue">Portfolio</v-btn>
        <v-btn large to="/quotes">Quotes</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>Funds: {{ funds | currency }}</v-toolbar-items>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn class="elevation-1" fab @click="endDay">
          <v-icon large class="mr-2">mdi-database-refresh</v-icon>
        </v-btn>

        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="elevation-1 mx-1" fab v-on="on">
                <v-icon large class="mr-2">mdi-content-save</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="saveData">
                <v-list-item-title>Save Data</v-list-item-title>
              </v-list-item>
              <v-list-item @click="loadData">
                <v-list-item-title>Load Data</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer width="20px"></v-spacer>
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
import { mapActions } from "vuex";
export default {
  name: "headercomp",
  data: () => ({
    buttontext: "Stocks"
  }),
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),

    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>