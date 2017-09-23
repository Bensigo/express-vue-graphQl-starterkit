<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue.js Core Docs</a></li>
      <li><a href="http://graphql.org/learn/" target="_blank">GraphQL</a></li>
      <li><a href="https://github.com/Akryum/vue-apollo" target="_blank">Vue-apollo</a></li>
      <li><a href="https://twitter.com/ben_sigo" target="_blank">@Bensigo</a></li>
      <li><a href="https://vuetifyjs.com/" target="_blank">Vuetify</a></li>
      </br>
      </br>
      <h6 style="color: red">R.I.P REST, welcome GraphQL 🎉🎉 </h6>
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'GraphQL , Apollo starter kit with Vuejs and Express'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
