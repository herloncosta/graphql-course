import { gql } from 'apollo-server'
import { userTypeDef } from './user/user-type'
import { userResolver } from './user/user-resolver'

const rootTypeDefs = gql`
    type Query {
        _empty: Boolean
    }
`

const rootResolvers = {
	Query: {
		_empty: () => true
	}
}

export const typeDefs = [ rootTypeDefs, userTypeDef ]
export const resolvers = [ rootResolvers, userResolver ]