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
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110},
                { id: 2, name: 'Google', price: 100},
                { id: 3, name: 'Apple', price: 10},
                { id: 4, name: 'Adidas', price: 180},
                { id: 5, name: 'Petzi', price: 210},
            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>