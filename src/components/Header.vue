<template>
  <div class="mt-12">
    <v-toolbar class="mt-4">
      <v-toolbar-title>Stocks</v-toolbar-title>

      <v-container d-flex>
        <v-btn large elevation to="/stocks">Link 1</v-btn>
        <v-btn large elevation>{{ buttontext }}</v-btn>
        <v-btn large elevation class="light-blue">Link 3</v-btn>
        <v-btn icon>
          <v-icon>mdi-console</v-icon>
        </v-btn>

        <template v-if="$vuetify.breakpoint.smAndUp">
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
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "header",
  data: () => ({
    buttontext: "button"
  })
};
</script>