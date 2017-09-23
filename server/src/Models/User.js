const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('../config')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
// adding schema method
userSchema.statics.newUser = async (email, username, password, User) => {
  // sever validation
  if (!email || !password || !username) {
    throw new Error('All field is required')
  }
  email = email.toLowerCase()
  password = password.toLowerCase()
  const exist = await User.findOne({email})
  if (exist) {
    throw new Error('user already exist')
  }else {
      // hash the user password 
    password = await bcryptjs.hash(password, 10)
    // create a new instace of user 
    const user = await new User({email, password, username})
    user.save()
    // asign a token to user 
    const token = jwt.sign({
    user: _.pick(user, ['_id'])
    }, config.SECRET, {
      expiresIn: '7d'
    })
    return token
  }
}

userSchema.statics.authenticate = async (email, password, User) => {
  // server validtation
  if (!email || !password) {
    throw new Error('email and password required')
  }
  // making email and password lower case
  email = email.toLowerCase()
  password = password.toLowerCase()
  // find user if user exist
  const user = await User.findOne({email})
  if (!user) {
    throw new Error('user not found')
  }
  // check if password match 
  const verified = await bcryptjs.compare(password, user.password)
  if (!verified) {
    throw new Error('password does not match')
  }
  // asign token to user 
  const token = jwt.sign({
    user: _.pick(user, ['_id', 'username'])},
  config.SECRET, {
    expiresIn: '7d'
  }
  )
  return token
}

const User = mongoose.model('User', userSchema)
module.exports = User
