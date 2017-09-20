module.exports = `
 type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  isDeleted: Boolean!
  createdAt: String!
  isActive: Boolean!
 }
 type Query {
   user(id: ID!): User!
 }
 type Mutation {
   createUser(username: String!, email: String!, password: String!): String!
   login(email: String!, password: String!): String!
 }
`
