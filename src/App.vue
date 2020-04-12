<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="12">
          <Header/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" class="cat-menu">
          <CategoriesMenu/>
        </b-col>
        <b-col cols="9" class="main-page">
          <router-view :key="$route.fullPath"></router-view>      
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <Footer />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CategoriesMenu from './components/CategoriesMenu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    CategoriesMenu,
    Footer
  }
}
</script>
<style scoped>
.cat-menu {
  padding-right: 0%;
}
.main-page{
  padding-left: 0%;
}
</style>
