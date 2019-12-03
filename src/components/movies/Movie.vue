<template>
    <v-card color="greyblue">
        <v-img>{{image}}</v-img>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-subtitle>{{item.type}}</v-card-subtitle>
        <v-card-text>Text</v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Movie",
        props:
            ["item"],
        data: () => ({
           image: require("../../assets/theboys.jpg")
        }),
    }
</script>

<style scoped>

</style>