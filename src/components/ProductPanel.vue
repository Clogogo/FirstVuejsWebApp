<template>
  <div class="product-panel">
    <h3>{{ title }}</h3>
    <b-alert variant="info" :show="showConfirmation">
      <h4 class="alert-heading">Well</h4>
      <p>Item successfully added to cart</p>
      <p>
        <b-button variant="success" to="/cart" class="mr-2">Checkout</b-button>
        <b-button variant="info" to="/" @click="closeAlert">Continue Shopping</b-button>
      </p>
    </b-alert>
    <b-card-group deck>
      <ProductCard
        :product="product"
        v-for="product in products"
        :key="product.id"
        @notify="showAlert"
      />
    </b-card-group>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import axios from "axios";

export default {
  name: "ProductPanel",

  props: {
    title: String,
    categoryAlias: String,
    section: String
  },

  components: {
    ProductCard
  },

  data() {
    return {
      products: [],
      showConfirmation: false
    };
  },

  methods: {
    showAlert: function() {
      this.showConfirmation = true;
    },
    closeAlert: function() {
      this.showConfirmation = false;
    }
  },

  mounted() {
    if (this.categoryAlias) {
      axios
        .get(
          "https://euas.person.ee/categories/" +
            this.categoryAlias +
            "/products"
        )
        .then(response => {
          this.products = response.data;
        });
    } else {
      axios
        .get("https://euas.person.ee/products/tags/" + this.section)
        .then(response => {
          this.products = response.data;
        });
    }
  }
};
</script>

<style scoped>
.product-panel {
  margin-right: 15px;
}
</style>
