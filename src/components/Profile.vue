<template>
  <div id="profile">
    <h2 class="profile-title">Profile Page</h2>
    <div>
      <b-avatar size="172px">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfQw0oMc5VexnvSFnM474y6Uoy8cAss5Fwqs8YS74uFkbFVyv9&usqp=CAU"
        />
      </b-avatar>
      <p>Name: James Bond</p>
      <p>Shipping Address: Harju County, Tallinn Estonia</p>
      <p>Phone Number: +372 333 8888</p>
      <p>Email: xyz2020@yahoo.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {}
};
</script>

<style scoped>
.profile-title {
  text-align: center;
  padding-top: 5px;
}

#profile{
  background-color: #999c9f;
  height: 100%;
}
</style>