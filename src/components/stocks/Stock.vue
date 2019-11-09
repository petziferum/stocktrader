<template>
        <v-card class="ma-2" width="600px">
            <v-card-title class="success">
                {{ stock.name}}
            <v-card-subtitle>
                <small>{{stock.price}}</small>
            </v-card-subtitle>
            </v-card-title>
            <v-container d-flex>
                <v-row>
                    <v-col>
                    <input d-inline-flex
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger: insufficientFunds}"
                    >
                    </v-col>
                    <v-col cols="3">
                    <v-btn @click="buyStock" 
                    :disabled="disableButton()">Buy</v-btn>
                </v-col>
                </v-row>
            </v-container>
        </v-card>
</template>

<script>
export default {
    props:
        ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        disableButton(){
            if(this.quantity <=0 || this.quantity * this.stock.price > this.funds) {
            return true;
            } else {
                return false;
            }
        },
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order);
            this.quantity =0;
        }
    }    
}
</script>
<style scoped>
.danger {
    border:1px solid red;
}
</style>