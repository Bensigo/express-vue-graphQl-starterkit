module.exports = {
  Query: {
    async user (root, args, {DB, user}) {
      // if user is login return the curret user
      if (user) {
        const me = await DB.User.findOne({_id: user._id})
        return me
      } else {
        return null
      }
    }
  },
  Mutation: {
    async createUser (root, {username, email, password}, {DB, user}) {
      // check if user is login
      if (!user) {
        const User = DB.User
        const userToken = await User.newUser(email, username, password, User)
        return {token:userToken}
      }
    },
    async login (root, {email, password}, {DB, user}) {
      if (!user) {
        // authenticate the user then return a token
        const User = DB.User
        const userToken = await User.authenticate(email, password, User)
        return {token:userToken}
      }
    }
  }
}
