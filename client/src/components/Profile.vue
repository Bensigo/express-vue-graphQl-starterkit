<template>
  <v-container>
    <div v-if='user'> 
      <h4>Good Day, {{getUser}}</h4>
    </div>
  </v-container>
</template>

<script>
import {GET_USER_QUERY} from '../constant/graphql'
export default {
  data () {
    return {
      getUser: ''
    }
  },
  computed: {
    user () {
      const isLogin = this.$root.$data.user
      if (!isLogin) {
        this.getuser = ''
        this.$router.push('/')
      }
      // this.$root.$data.username = this.getUser.username
      this.getUsername
      return isLogin
    },
    getUsername () {
    }
  },
  created () {
    this.$apollo.addSmartQuery('getUser', {
      query: GET_USER_QUERY,
      manual: true,
      result ({loading, data}) {
        if (!loading) {
          this.getUser = data.getUser.username
          this.$root.$data.username = data.getUser.username
        }
      },
      update: (data) => {
        console.log(data)
        return data.getUser.username
      }
    })
  },
  destroyed () {
    this.getUser = ''
    this.$root.$data.username = ''
  }
}
</script>

<style>

</style>
