const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')

// requiring app modules 
const config = require('./config')
const schema = require('./graphql')
const DB = require('./Models')

// making instance of the app 
const app = express()

// setting up middle ware 
app.use(cors({origin: config.ORIGIN}))
app.use(morgan('dev'))

// setting up graphql 
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    DB
  }
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// connecting to mongodb
mongoose.connect(config.DB_URL, () => {
  console.log('connected to database successfully')
})

// starting up server
app.listen(config.PORT, () => {
  console.log(`starting graphql server on localhost:${config.PORT}/graphiql`)
})
