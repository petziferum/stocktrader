<template>
<v-row style="border: 1px solid black;">
    <v-col v-for="(stock, id) in stocks" :key="id">
    <app-stock lg2 xs12   :stock="stock"></app-stock>
    {{id}}
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