<template>
  <div id="app">
    <he></he>
    <router-view></router-view>
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

<style>
</style>
