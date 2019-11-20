<template>
    <v-row>
        <v-col>
            <div class="row">
                <app-Quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">"{{ quote }}"</app-Quote>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    import quote from './Quote'
    export default {
        name: "QuoteGrid.vue",
        props: ['quotes'],
        components: {
            appQuote: quote
        },
        methods: {
            deleteQuote(index){
                this.$emit('quoteDeleted', index)
            }
        }
    }
</script>

<style scoped>

</style>