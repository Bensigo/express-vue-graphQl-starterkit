<template>
  <form-container title='Register'>
    <v-form>
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
            <span>
                      <router-link  to='/login'>
                      <p>Already have an account</p>
                      </router-link>
                    </span>
            <v-btn dark class='primary' @click='register' raised z-index>Register</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    </form-container>
</template>

<script>
  import FormContainer from './FormContainer'
  export default {
    $validates: true,
    data () {
      return {
        email: '',
        password: '',
        username: '',
        confirm: '',
        title: 'Register'
      }
    },
    methods: {
      register () {
        this.$validator.validateAll()
      }
    },
    components: {
      FormContainer
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
  
  a {
    text-decoration: none;
    cursor: pointer;
    color: gray;
  }
</style>
