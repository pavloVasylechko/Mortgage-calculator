<template>
  <div class="v-main-wrapper">
      <div class="container">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'v-main-wrapper',
}
</script>

<style  scoped>
.container{
    max-width: 550px;
    margin: 0 auto;
    padding: 30px;
}
</style>