<template>
  <div class="v-calculator">
    <div class="calculator">
      <h1>Calculator</h1>
      <router-link :to="{name:'management'}">
          <button class="wrapper__btn">Management</button>
      </router-link>
      <template v-if="banksList.length">
          <v-calculator-item
          v-for="item in banksList"
          :key="item.id"
          :oneBank='item'
          />
      </template>
      <template v-else>
        <h2 class="list__empty">List is empty</h2>
      </template>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vCalculatorItem from './v-calculator-item.vue'
export default {
    name:'v-calculator',
    components:{
      vCalculatorItem
    },
    computed:{
      ...mapGetters('banksList',['banksList'])
    }
}
</script>

<style>
.calculator{
  position: relative;
  width: 550px;
}
.wrapper__btn{
    background-color: #2e73e9;
    position: absolute;
    border: none;
    border-radius: 15px;
    top: -20px;
    right: -20px;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 700;
    color:#fff;
}
.list__empty{
    text-align: center;
    padding: 20px;
    background-color: rgb(230, 230, 230);
    border-radius: 15px;
}
</style>