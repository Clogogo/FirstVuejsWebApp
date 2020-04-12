<template>
  <div class="orderListing">
    <h3>List Of All Orders</h3>
    <table class="table">
      <tr>
        <th>Order ID</th>
        <th>Items</th>
        <th>Total Amount</th>
        <th>Actions</th>
      </tr>

      <tr v-for="order in orders" :key="order.id">
        <td>{{order.id}}</td>

        <td>{{order.items && order.items.length}} item(s)</td>

        <td>€ {{ orderAmount(order) }}</td>
        <td>
          <b-link :to="'/orderdetails/'+ order.id">
            <b-button>Order details</b-button>
          </b-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "orderListing",
  data: () => {
    return {
      orders: {}
    };
  },
  mounted() {
    axios
      .get("https://euas.person.ee/user/orders")
      .then(response => {
        this.orders = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    orderAmount: function(order) {
      let sum = 0;
      for (const item of order.items) {
        sum += item.total;
      }
      return sum;
    }
  }
};
</script>


<style scoped>
th,
td {
  text-align: center;
  border: solid 1px;
}

table{
  width: 80%;
}

.orderListing{
  background-color: #999c9f;
  height: 100%;
}
</style>