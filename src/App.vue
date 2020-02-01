<template>
  <div id="app">
    <he></he>
    <router-view></router-view>
    <div class="essay clearfix">
      <router-view name="left"></router-view>
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script>
import He from './components/He'

export default {
  name: 'App',
  components: {
    He
  }
}
</script>

<style lang="stylus" scoped>
.essay
  width 80%
  margin 20px auto
</style>
