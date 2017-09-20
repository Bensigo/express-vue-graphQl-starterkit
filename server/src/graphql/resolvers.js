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
    createUser (root, args, {DB}) {
    },
    login (root, args, {DB}) {
    }
  }
}
