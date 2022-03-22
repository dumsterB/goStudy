<template>
  <div>
  <div class="error-page">
    <img height="500" width="500" src="../assets/img/3793096.jpg" alt="">
  </div>
  <div class="error-page">
    <router-link to="/">Назад</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: "Error.vue"
}
</script>

<style scoped>
.error-page {
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  padding: 50px;
}
</style>