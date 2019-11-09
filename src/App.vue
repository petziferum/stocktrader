<template>
  <v-app>
    <app-Appbar></app-Appbar>
    <app-Header></app-Header>

    <v-content class="xs-12 sm-12 md-12 lg-12">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "./components/Toolbar";
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
    appAppbar: Appbar
  },
  name: "App",

  data: () => ({
    //
  })
};
</script>
