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
 type Token {
  token: String!
 }
 type Query {
  getUser: User!
 }
 type Mutation {
   createUser(username: String!, email: String!, password: String!): Token!
   login(email: String!, password: String!): Token!
 }
`
