import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './models/schema'

import axios from 'axios'

const server = new ApolloServer({ typeDefs, resolvers, context: () => {
	return {
		axios
	}
}})
server.listen().then(({ url }) => console.log(`🚀 Server running at ${url}`))