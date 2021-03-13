import gql from 'graphql-tag'
export default gql`
  query users {
    users(page: 1, limit: 20) {
      data {
        id
        firstName
        lastName
        picture
        title
        email
      }
    }
  }
`
