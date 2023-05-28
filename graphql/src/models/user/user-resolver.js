const user = async (_, args, context) => {
	const response = await context.getUser(args.id)
	const user = await response.data
	return user
}

const users = async (_, __, context) => {
	const response = await context.getUsers()
	const users = await response.data
	return users
}

export const userResolver = {
	Query: {
		user,
		users,
	},
}
