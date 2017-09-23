import decode from 'jwt-decode'

export const getUserIdFromToken = (tokenId) => {
  const user = decode(tokenId)
  return user.user._id
}

export const isLogin = (userId) => {
  if (!userId) {
    return false
  }
  return true
}
