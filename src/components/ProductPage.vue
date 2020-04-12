<template>
  <div class="product-page">
    <h3>{{ product.title }}</h3>
    <b-row>
      <b-col cols="5">
        <img
          v-if="selected.image"
          :src="selected.image"
          class="product-image"
        />
        <img v-else :src="product.image" class="product-image" />
      </b-col>
      <b-col cols="7">
        <p>{{ product.description }}</p>
        <p>Select Option</p>
        <b-alert v-if="this.qty > this.selected.qty" show variant="warning"
          >You can't select more than {{ selected.qty }} items available in
          stock.</b-alert
        >

        <div>
          <b-form inline>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="selected"
              :options="options"
              :value="null"
            ></b-form-select>
          </b-form>
        </div>
        <p>Available in stock: {{ selected.qty }}</p>
        <p>Cost per Unit: €{{ selected.price }}</p>
        <p>Total Cost of Items Selected: €{{ totalPrice.toFixed(2) }}</p>
        <p>Qty selected: {{ qty }}</p>

        <div class="mt-2 d-flex">
          <b-button
            size="sm"
            variant="dark"
            class="mr-2"
            @click="decreaseCount()"
            >-</b-button
          >
          <b-button size="sm" variant="success" @click="increaseCount()"
            >+</b-button
          >
        </div>
        <div class="mt-2">
          <b-button size="sm" variant="success" @click="addToCart()"
            >Add to Cart</b-button
          >
        </div>
        <div class="mt-2">
          <b-alert :show="showConfirmation" variant="info">
            <h4 class="alert-heading">Thanks</h4>
            <p>Item successfully added to cart</p>
            <p>
              <b-button to="/cart">Checkout</b-button>
              <b-button variant="info" @click="closeAlert"
                >Continue Shopping</b-button
              >
            </p>
          </b-alert>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import { dataOptions } from "../utils/index";

export default {
  name: "ProductPage",
  data: function() {
    return {
      product: {},
      options: [],
      selected: { title: "", price: "", image: "" },
      qty: 0,
      totalPrice: 0,
      showConfirmation: false
    };
  },
  mounted() {
    axios
      .get("https://euas.person.ee/products/" + this.$route.params.productId)
      .then(response => {
        this.product = response.data;
        this.options = dataOptions(response.data.options);
      })
      .catch(errr => console.log(errr));
  },

  methods: {
    increaseCount() {
      this.qty = this.qty + 1;
      this.totalPrice = this.selected.price * this.qty;
    },
    decreaseCount() {
      if (this.qty === 0) {
        this.totalPrice = 0;
        return;
      }
      this.qty = this.qty - 1;
      this.totalPrice = this.selected.price * this.qty;
    },
    addToCart() {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = [];
      this.$root.$data.cart.items.push({
        productId: this.product.id,
        qty: this.qty,
        optionCode: this.selected.code,
        optionImage: this.selected.image,
        price: this.selected.price,
        total: this.selected.price * this.qty
      });
      this.$root.$data.saveCart();
      this.showConfirmation = true;
    },
    closeAlert: function() {
      this.showConfirmation = false;
    }
  }
};
</script>

<style scoped>
.product-image {
  width: 300px;
  height: 300px;
}

.product-page {
  background-color: #d7c797;
}

.dropdown {
  width: 80%;
}
</style>
