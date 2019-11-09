<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card class="mx-auto" max-width="200" :elevation="hover ? 12 : 1">
        <v-toolbar color="light-green">
          <v-toolbar-title>Titel</v-toolbar-title>
        </v-toolbar>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
export default {};
</script>
