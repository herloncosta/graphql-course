import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './models/schema'

import { context } from './models/context'

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
})

server.listen().then(({ url }) => console.log(`🚀 Server running at ${url}`))
