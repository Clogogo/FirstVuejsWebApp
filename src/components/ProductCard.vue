<template>
  <b-card
    :title="product.title"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 product-card"
  >
    <b-card-text>
      {{ product.description }}
    </b-card-text>

    <b-button
    :to="'/products/' + product.id"
     size="sm">More details</b-button>
     <span class="ml-2"><b-button size="sm"
     variant="success" @click="addToCart()">Buy now</b-button></span>
  </b-card>
  
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },

  methods: {
    addToCart() {
      if (!this.$root.$data.cart.items) 
        this.$root.$data.cart.items = [];
        this.$root.$data.cart.items.push({
          productId: this.product.id,
          qty: 1,
          optionCode: this.product.options[0].code,
          optionImage: this.product.options[0].image,
          price: this.product.options[0].price,
          total: this.product.options[0].price 
        })
        this.$root.$data.saveCart();
        this.$emit('notify')
        
        
      
    }
  }
}
</script>

<style scoped>
b-card{
  width: 300px;
}
b-button{
  color: #999c9f;
}
p, h4{
  color: #999c9f;
}
.product-card{
  background-color: #343a40;  
}
</style>
