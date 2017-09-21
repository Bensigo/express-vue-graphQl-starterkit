<template>
  <div id="app">
    <v-app>
      <navigation></navigation>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
