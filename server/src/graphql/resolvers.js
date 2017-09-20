const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const config = require('../config')

module.exports = {
  Query: {
    async user (root, args, {DB}) {
      const {id} = args
      // try to find a user by id the return the user
      try {
        const user = await DB.User.findOne({_id: id})
        return user
      } catch (err) {
        console.error(err)
        throw new Error('user not found')
      }
    }
  },
  Mutation: {
    async createUser (root, args, {DB}) {
      let {email, username, password} = args
      // adding server validation
      console.log(username, email, password)
      if (!email || !password || !username) {
        throw new Error('username, email and password required')
      }
      // make email password lowercase
      email = email.toLowerCase()
      password = password.toLowerCase()
      console.log(email, password)
      // hash the password
      password = await bcryptjs.hash(password, 10)
      // save the user 
      const user = await new DB.User({email, username, password})
      user.save()
      // assign a web token
      const token = jwt.sign({
        user: _.pick(user, ['_id', 'username'])
      }, config.SECRET, {
        expiresIn: '7d'
      })
      // return the token
      return token
    },
    login (root, args, {DB}) {
    }
  }
}
