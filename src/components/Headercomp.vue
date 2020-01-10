<template>
  <div class="mt-0">
    <v-toolbar class="mt-0">
      <v-toolbar-title>Stocks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn large elevation to="/dashboard">Login</v-btn>
        <v-btn large elevation to="/movies">Movies</v-btn>
        <v-btn large elevation to="/">Home</v-btn>
        <v-btn large elevation to="/movies">Movies</v-btn>
        <v-btn large elevation to="/stocks">{{ buttontext }}</v-btn>
        <v-btn large elevation to="/portfolio" class="light-blue">Portfolio</v-btn>
        <v-btn large to="/chatwelcome">Chat</v-btn>
        <v-btn large to="/quotes">Quotes</v-btn>
        <v-btn large elevation to="/login">Login</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>Funds: {{ funds | currency }}</v-toolbar-items>
      <v-spacer></v-spacer>
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
      <template v-if="$vuetify.breakpoint.lgAndUp">

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
import axios from "axios"
export default {
  name: "headercomp",
  data: () => ({
    buttontext: "Stocks"
  }),
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
      axios.post('http://localhost:8080/data.json', data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    },
    loadData() {
      this.fetchData();
    }
  },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
  mounted()  {
    //this.loadData();
  }
};
</script>