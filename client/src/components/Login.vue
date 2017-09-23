<template>
  <form-container title='Login'>
    <v-form>
      <v-container>
        <v-layout justify-center>
          <v-flex xs9 order-md3>
            <v-text-field required v-model='email' label='Email' :error-messages="errors.collect('email')" data-vv-name="email" v-validate="'required|email'">
  
            </v-text-field>
            <v-text-field required label='password' v-model="password" type='password' :error-messages="errors.collect('password')" data-vv-name="password" v-validate="'required|min:8'">
  
            </v-text-field>
            <span>
                                <router-link  to='/register'>
                                <p>Don't have an account</p>
                                </router-link>
                              </span>
            <v-btn dark class='primary' @click='authenticate'>Login</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </form-container>
</template>

<script>
  import FormContainer from './FormContainer'
  import {LOGIN_MUTATION} from '../constant/graphql'
  import {getUserIdFromToken} from '../utils/authService'
  export default {
    $validates: true,
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      authenticate () {
        this.$validator.validateAll()
        console.log(this.email, this.password)
        const {email, password} = this
        this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email,
            password
          }
        }).then(response => {
          const tokenId = response.data.login.token
          const userId = getUserIdFromToken(tokenId)
          this.saveuserData(tokenId, userId)
          this.$root.$data.user = userId
          this.$router.push('/profile')
        }).catch(err => {
          console.log(err)
        })
      },
      saveuserData (tokenId, userId) {
        localStorage.setItem('token_id', tokenId)
        localStorage.setItem('user_id', userId)
      }
    },
    components: {
      FormContainer
    }
  }
</script>

<style scoped>
  
</style>
