<template>
    <v-container class="mx-auto">
        <v-progress-linear
        :value="quoteValue"
        height="25"
        class="mx-0"
        rounded

        >
        {{ quoteCount }} / {{ maxQuotes }}
        </v-progress-linear>
    </v-container>
</template>

<script>
    export default {
        name: "Header.vue",
        props: ['quoteCount','maxQuotes'],
        computed: {
            quoteValue(){
                return (this.quoteCount/this.maxQuotes)*100;
            }
        }
    }
</script>

<style scoped>

</style>