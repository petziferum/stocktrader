<template>
    <v-card class="ma-1" color="bluegrey">
        <v-img :src="item.img" :aspect-ratio="16/9" max-width="100%"></v-img>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-subtitle>{{item.type}}</v-card-subtitle>
        <v-card-text>{{imgReturn}}</v-card-text>
        <v-btn @click="imgReturn">return</v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "Movie",
        props:
            ["item"],
        data: () => ({
           img: []
        }),
        methods: {
            imgReturn: function() {
                const url = this.item.img;
                console.log("DAs ist die url",url);
                return "../../assets"+url;
            }
        }
    }
</script>

<style scoped>

</style>