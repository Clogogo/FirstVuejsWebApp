<template>
  <div class="category-page">
    <h2> {{this.$route.params.categoryAlias}} category</h2>
    <ProductPanel :categoryAlias="this.$route.params.categoryAlias" />
  </div>
</template>

<script>
import ProductPanel from "./ProductPanel.vue";

export default {
  name: "CategoryPage",
  components: {
    ProductPanel
  }
};
</script>

<style scoped>
.category-page{
  background-color: #999c9f;
  height: 100%;
}
</style>
