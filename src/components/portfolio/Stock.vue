<template>
        <v-card class="ma-2" max-width="600px">
            <v-card-title class="success">
                {{ stock.name}}
            <v-card-subtitle>
                <small>Price: {{stock.price }} | Quantity: {{stock.quantity}}</small>
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
                    >
                    </v-col>
                    <v-col cols="3">
                    <v-btn @click="sellStock" :disabled="disableButton()">Sell</v-btn>
                </v-col>
                </v-row>
            </v-container>
        </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props:
        ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        disableButton(){
            if(this.quantity <=0) {
            return true;
            } else {
                return false;
            }
        },
        sellStock() {
            const order ={
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellStock();
        }
    }    
}
</script>