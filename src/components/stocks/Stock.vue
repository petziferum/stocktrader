<template>
  <v-card class="ma-2" width="600px">
    <v-card-title class="success pa-1">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ stock.name }}</v-list-item-title>
          <v-list-item-subtitle>{{stock.price}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>

    <v-container>
      <v-row>
        <v-col>
          <input
            d-inline-flex
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />
        </v-col>
        <v-col cols="3">
          <v-btn @click="buyStock" tile :disabled="disableButton()">Buy</v-btn>
        </v-col>
      </v-row>
      <v-row v-show="insufficientFunds">
        <v-col>{{ messageText }}</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      if (this.quantity * this.stock.price > this.funds) {
        return true;
      } else {
        return false;
      }
    },
    messageText() {
      if (this.insufficientFunds) {
        return "Nicht genug Geld.";
      } else {
        return "";
      }
    }
  },
  methods: {
    disableButton() {
      if (this.quantity <= 0 || this.insufficientFunds) {
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
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>