<template>
  <div id="app">
    <v-main-wrapper/>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'
export default {
  components: { 
    vMainWrapper 
  },
}
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  position: relative;
}
</style>
