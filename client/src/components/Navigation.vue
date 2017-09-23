<template>
  <div>
    <v-navigation-drawer 
      temporary
      v-model='showDrawer'
      >
      <v-list v-if='user'>
        <v-list-tile>
            <v-icon left class='m-1'>account_circle</v-icon>
            <v-list-tile-title>{{getUser}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list  v-if='!user'>
        <v-list-tile 
          v-for='link in navItems' 
          :key='link.title'
          :to='link.path'
          >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
     <v-list v-else >
       <v-list-tile @click.native="logout">
         <v-list-tile-action>
           <v-icon>lock</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title>logout</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
    </v-list> 
    </v-navigation-drawer>
    <v-toolbar dark class='purple darken-2 mb-1'>
      <v-toolbar-title>
       <router-link  to="/" tag='span' style="cursor: pointer ">
         {{title}}
        </router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon 
        @click.stop.native='showDrawer = !showDrawer' 
        class='hidden-md-and-up'>
      </v-toolbar-side-icon>
      <v-toolbar-items class='hidden-md-and-down'>
        <span v-if='!user' class='pt-2'>
          <v-btn    
            flat
            v-for='link in navItems'
              :key='link.title'
              :to='link.path'
            >
              <v-icon left>{{link.icon}}</v-icon>
              {{link.title}}
            </v-btn> 
          </span>  
         <span  v-else class='pt-2'> 
          <v-btn
            flat
            @click='logout'
             >
               <v-icon left>lock</v-icon>
               Logout
            </v-btn>
            <v-btn
              flat
              to='/profile'
             
              >
               <v-icon left>account_circle</v-icon>
               {{getUser}}
            </v-btn> 
          </span>  
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'App',
      navItems: [
        {title: 'login', icon: 'lock_open', path: '/login'},
        {title: 'register', icon: 'account_circle', path: '/register'}
      ],
      getUser: '',
      showDrawer: false,
      loading: 0
    }
  },
  computed: {
    user () {
      this.getUser = this.$root.$data.username
      return this.$root.$data.user
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('user_id')
      localStorage.removeItem('token_id')
      this.$root.$data.user = localStorage.getItem('user_id')
      this.$root.$data.username = ''
      this.getUser = ''
      this.$router.go('/')
    }
  }
}
</script>

<style>
</style>
