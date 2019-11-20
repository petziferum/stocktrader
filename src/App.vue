<template>
  <v-app>

    <app-Headercomp />
    <v-content class="background-color:#c0c0c0;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import headerapp from "./components/Headercomp";
export default {
  name: "App",
  components: {
    appHeadercomp: headerapp
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>
