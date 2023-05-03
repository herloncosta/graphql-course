import { gql } from 'apollo-server'

export const userTypeDef = gql`
    extend type Query {
        user: User!
        users: [User!]!
    }

    type User {
        id: ID!
        name: String
    }
`