<template>
  <div class="orderDetails">
    <h2>My Order Details</h2>
    <b-alert
      show
      variant="success"
      v-if="this.$route.query.success"
    >Thank you for submitting your order. It will be shipped within 7 working days</b-alert>
    <table class="table">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>

      <tr v-for="(item, index) in order.items" :key="item.productId + '-' + index">
        <td>
          <b-link :to="'/products/' + item.productId">
            <img :src="item.optionImage" class="option-image" />
          </b-link>
        </td>
        <td>€ {{item.price }}</td>
        <td>{{item.qty }}</td>
        <td>€ {{item.total }}</td>
        <td>
          <b-link :to="'/products/'+ item.productId">
            <b-button >Product details</b-button>
          </b-link>
        </td>
      </tr>
      <tr id="total" v-if="order.items">
        <td>Total:</td>
        <td></td>
        <td></td>
        <td>€ {{total}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "orderDetails",
  computed: {
    total: function() {
      let sum = 0;
      for (const item of this.order.items) {
        sum += item.total;
      }
      return sum;
    }
  },
  data: function() {
    return {
      order: {}
    };
  },
  mounted() {
    console.log(this.$route.query.success);
    
    axios
      .get("https://euas.person.ee/user/orders/" + this.$route.params.orderId)
      .then(response => {
        this.order = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.option-image {
  height: 150px;
  width: 150px;
}

#total {
  font-weight: bold;
}

th,
td {
  text-align: center;
  border: solid 1px;
}

table{
  width: 98%;
}

.orderDetails{
  background-color: #999c9f;
  height: 100%;
}
</style>