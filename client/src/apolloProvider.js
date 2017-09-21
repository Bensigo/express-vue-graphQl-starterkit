import Vue from 'vue'
import VueApollo from 'vue-apollo'

import {client} from './apolloClient'

// use vue-apollo as a plugin
Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
  defaultClient: client,
  defaultOption: {
    $loadingKey: 'loading'
  }
})
