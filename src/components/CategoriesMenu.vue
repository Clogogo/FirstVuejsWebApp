<template>
  <div class="category-menu">
    <b-nav vertical>
      <b-nav-item class="item"
        v-for="category in categories"
        :key="category.alias"
        :to="'/categories/' + category.alias"
      >{{category.title}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoriesMenu",
  data: function() {
    return {
      categories: []
    };
  },
  mounted() {
    axios.get("https://euas.person.ee/categories").then(response => {
      this.categories = response.data;
    });
  }
};
</script>

<style scoped>
a {
  color: #343a40;;
}
.category-menu{
  background-color: #999c9f;
  height: 100%;
  padding-right: 0;
}
</style>
