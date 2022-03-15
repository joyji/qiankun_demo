<!--
 * @Description: 
 * @Author: jiying079
 * @Date: 2022-03-14 15:46:22
 * @LastEditTime: 2022-03-14 17:03:48
-->
<template>
  <div class="dashboard-container">
    <h1>子应用的dashboard</h1>
    <div class="dashboard-text">name: {{ name }}</div>
    <button @click="test">跳转test </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    test() {
      this.$router.push({ path: '/layout/vue-admin-child/example/tree'})
    }
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
