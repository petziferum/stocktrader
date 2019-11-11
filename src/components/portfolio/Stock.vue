<template>
  <v-card class="ma-2" max-width="600px">
    <v-img src="../../assets/bgimg.jpg" max-height="100">
      <v-card-title class="white--text">
        {{ stock.name}}
        <v-card-subtitle class="white--text">
          <small>Price: {{stock.price }} | Quantity: {{stock.quantity}}</small>
        </v-card-subtitle>
      </v-card-title>
    </v-img>
    <v-container d-flex>
      <v-row>
        <v-col>
          <input
            d-inline-flex
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </v-col>
        <v-col cols="3">
          <v-btn @click="sellStock" :disabled="insufficientQuantity || disableButton()">Sell</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    disableButton() {
      if (this.quantity <= 0) {
        return true;
      } else {
        return false;
      }
    },
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>