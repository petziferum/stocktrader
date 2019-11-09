<template>
  <v-app>
    <app-Appbar />

    <app-Headercomp />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import appbar from './components/Appbar'
import headerapp from './components/Headercomp'
export default {
  name: 'App',
  components: {
    appAppbar: appbar,
    appHeadercomp: headerapp,
  },
  data: () => ({
    //
  }),
};
</script>
