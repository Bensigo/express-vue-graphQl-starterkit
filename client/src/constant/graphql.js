import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($email: String!, $username: String!, $password: String!){
    createUser(email: $email, username: $username, password: $password){
      token
    }
  }
`

export const GET_USER_QUERY = gql`
  query getUserQuery {
      getUser{ 
        username
      }
  }
`
export const LOGIN_MUTATION = gql`
 mutation loginMutation ($email: String!, $password: String!){
   login(email: $email, password: $password){
     token
   }
 }
`
