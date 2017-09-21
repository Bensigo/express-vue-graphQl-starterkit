<template>
  <div>
    <v-navigation-drawer 
      temporary
      v-model='showDrawer'
      >
      <v-list>
        <v-list-tile 
          v-for='link in navItems' 
          :key='link.title'
          :to='link.path'
          v-if='!link.isLogin'
          >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
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
         <v-btn 
          flat
          v-for='link in navItems'
          v-if='!link.isLogin' 
          :key='link.title'
          :to='link.path'
          >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>
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
        {title: 'login', icon: 'lock_open', path: '/login', isLogin: false},
        {title: 'register', icon: 'account_circle', path: '/register', isLogin: false},
        {title: 'logout', icon: 'lock', path: '/', isLogin: true},
        {title: 'profile', icon: 'account_circle', path: '/profile', isLogin: true}
      ],
      showDrawer: false
    }
  }
}
</script>

<style>
</style>
