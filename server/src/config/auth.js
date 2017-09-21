const jwt = require('jsonwebtoken')
const config = require('./')

const user = async req => {
  // get the user token from the header and set the req.user to the user gotten from the token
  const token = req.headers.authorization
  try {
    const {user} = await jwt.verify(token, config.SECRET)
    req.user = user
  } catch (err) {
    console.log(err)
  }
  req.next()
}
module.exports = user
