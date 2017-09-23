<template>
  <form-container title='Register'>
    <v-form @submit="register">
      <v-container>
        <v-layout justify-center>
          <v-flex xs9 order-md3>
            <v-text-field required label='Username' v-model='username' :error-messages="errors.collect('username')" data-vv-name='username' v-validate="'required'">
            </v-text-field>
            <v-text-field required label='Email' v-model='email' :error-messages="errors.collect('email')" data-vv-name='email' v-validate="'required|email'">
  
            </v-text-field>
            <v-text-field required label='password' type='password' v-model='password' name='pwd' data-vv-name='password' :error-messages="errors.collect('password')" v-validate="'required|min:8'">
            </v-text-field>
            <v-text-field required label='confirm' type='password' v-model='confirm' data-vv-name='confirm' :error-messages="errors.collect('confirm')" v-validate="'required|confirmed:pwd'">
  
            </v-text-field>
            <!-- <span class='danger'>{{error}}</span> -->
            <span>
                        <router-link  to='/login'>
                        <p>Already have an account</p>
                        </router-link>
                      </span>
            <v-btn dark  success class='primary' @click='register' raised z-index>Register</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form >
  </form-container>
</template>

<script>
  import FormContainer from './FormContainer'
  import {
    CREATE_USER_MUTATION
  } from '../constant/graphql'
  import {getUserIdFromToken} from '../utils/authService'
  export default {
    $validates: true,
    data () {
      return {
        email: '',
        password: '',
        username: '',
        confirm: '',
        title: 'Register',
        error: ''
      }
    },
    components: {
      FormContainer
    },
    methods: {
      register () {
        const {email, password, username} = this
        console.log(email, password, username)
        this.$validator.validateAll()
        // create a new user from our mutation
        this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            email,
            password,
            username
          }
        }).then(response => {
          const tokenId = response.data.createUser.token
          const userId = getUserIdFromToken(tokenId)
          this.saveUserData(tokenId, userId)
          this.$root.$data.user = userId
          this.$router.push('/profile')
        })
        .catch((err) => {
          // this.error = err.message.replace('GraphQL error:', '')
          console.log(err)
          // return this.error
        })
      },
      saveUserData (tokenId, userId) {
        localStorage.setItem('token_id', tokenId)
        localStorage.setItem('user_id', userId)
      }
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Concert+One");
  .logo {
    /* margin:10px 20px; */
    font-family: 'concert One';
    color: gray;
  }
  .danger{ 
    color: red;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: gray;
  }
</style>
