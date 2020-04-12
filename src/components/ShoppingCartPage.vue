<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div
      v-if="!items.length"
    >Your shopping cart is empty! Please add some items to your shopping cart</div>
    <table class="table" v-if="items.length">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>

      <tr v-for="(item, index) in this.$root.$data.cart.items" :key="item.productId + '-' + index">
        <td>
          <b-link :to="'/products/' + item.productId">
            <img :src="item.optionImage" class="option-image" />
          </b-link>
        </td>
        <td>€ {{item.price }}</td>
        <td>{{item.qty }}</td>
        <td>€ {{item.total.toFixed(2) }}</td>
        <td>
          <b-button variant="danger" @click="removeItem(index)"><i class="fas fa-trash-alt"></i></b-button>
        </td>
      </tr>
      <tr>
        <td>Total:</td>
        <td></td>
        <td></td>
        <td>€ {{total}}</td>
        <td></td>
      </tr>
    </table>
    <b-button variant="success"  @click="orderNow" v-if="this.items.length">Order Now</b-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "shoppingCart",
  computed: {
    items: function() {
      return this.$root.$data.cart.items || [];
    },
    total: function() {
      let sum = 0;
      for (const item of this.items) {
        sum += item.total;
      }
      return sum.toFixed(2);
    }
  },
  methods: {
    removeItem: function(index) {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = [];
      this.$root.$data.cart.items.splice(index, 1);
      this.$root.$data.saveCart();
    },
    orderNow: function() {
      let data = this.$root.$data;
      let router = this.$router;
      axios
        .post(
          "https://euas.person.ee/user/carts/" +
            this.$root.$data.cart.id +
            "/orders",
          this.$root.$data.cart
        )
        .then(function() {
          router.push("/orderdetails/" + data.cart.id + "?success=true");
          data.reinitCart();
        });
    }
  }
};
</script>
<style scoped>
.option-image {
  max-height: 50px;
  max-width: 50px;
}
.shopping-cart{
  background-color: #999c9f;
  height: 100%;
}
</style>