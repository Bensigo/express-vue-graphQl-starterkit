const {makeExecutableSchema} = require('graphql-tools')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const Schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = Schema
