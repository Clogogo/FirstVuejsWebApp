<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to="/">Online Store</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="cart" to="cart"
              ><i class="fas fa-shopping-cart"> Cart</i></b-nav-item
            >
            <b-nav-item to="/orderlist">My order</b-nav-item>
            <b-nav-item to="/profile">Profile</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </template>
    </b-navbar-toggle>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>
