<template>
    <v-card class="mx-auto ma-1" color="darkblue" max-width="300px" min-width="300">

        <v-img :src="item.img" :aspect-ratio="16/9" max-width="100%"></v-img>
        {{item.id}}
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-subtitle>{{item.type}}</v-card-subtitle>
        <v-card-text>{{imgReturn}}</v-card-text>
        <v-card-actions><v-btn @click="imgReturn">return</v-btn></v-card-actions>

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
                console.log("Das ist die url",url);
                return "../../assets"+url;
            }
        }
    }
</script>

<style scoped>

</style>