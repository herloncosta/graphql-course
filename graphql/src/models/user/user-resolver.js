const user = async (_, args, context) => {
	const response = await context.axios.get(`http://localhost:3000/users/${args.id}`)
	const user = await response.data
	return user
}

const users = async (_, __, context) => {
	const response = await context.axios.get('http://localhost:3000/users')
	const users = await response.data
	return users
}

export const userResolver = {
	Query: {
		user,
		users
	}
}