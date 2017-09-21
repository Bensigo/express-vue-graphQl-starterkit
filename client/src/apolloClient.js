import {createBatchingNetworkInterface, ApolloClient} from 'apollo-client'

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:9090/graphql' // change to backend domain on production server
})

// applying middleware for getting token from header
networkInterface.use([{
  applyBatchMiddleware (req, next) {
    // check if req have header
    if (!req.options.headers) {
      req.options.headers = {}
    }
    // get the token from localstorage and save it to authoriation header
    if (localStorage.getItem('token_id')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('token_id')}`
    }
    next()
  }
}])

// setting the nexworkInterface as interface for our new intsance of apollo client
export const client = new ApolloClient({
  networkInterface,
  connectToDevTools: true
})
