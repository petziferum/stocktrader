<template>
<v-row>
    <v-col v-for="stock in stocks" :key="stock.id">
    <app-stock :stock="stock"></app-stock>
    </v-col>
</v-row>
</template>

<script>
import Stock from './Stock'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>