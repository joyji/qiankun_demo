<!--
 * @Description: 
 * @Author: jiying079
 * @Date: 2022-03-15 11:38:44
 * @LastEditTime: 2022-03-15 11:41:50
-->
<template>
  <div class="app-container">
      <div id="uniContainer">test</div>
  </div>
</template>

<script>
import { start } from 'qiankun';

export default {
  data() {
    return {
     
    }
  },
  mounted() {
    if(!window.isQiankunStart){
      window.isQiankunStart = true;
      start();
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

