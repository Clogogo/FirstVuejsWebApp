<template>
  <div id="footer">
    <div class="icon-container">
    <i class="footer-icon fab fa-twitter fa-2x"></i>
    <i class="footer-icon fab fa-facebook-f fa-2x"></i>
    <i class="footer-icon fab fa-instagram fa-2x"></i>
    <i class="footer-icon fas fa-envelope size: 2x fa-2x"></i>
    <p> &copy; 2009 Chistyle.com All Rights Reserved.</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped>
#footer {
  background-color: 	#2d2d2d;
}

.icon-container {
  text-align: center;
  padding: 50px;
}

i {
  margin-right: 30px;
  color: #999c9f;
  cursor: pointer;
}

p{
  color: #999c9f;
  padding-top: 10px;
}
</style>