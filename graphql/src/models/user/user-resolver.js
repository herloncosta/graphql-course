const user = () => ({ id: 'as969d', name: 'Herlon Costa' })

const users = async (_, __, context) => {
	const response = await context.axios.get('http://localhost:3000/users')
	const users = response.data // falta do await proposital, o GraphQL irá resolver a promise
	return users
}

export const userResolver = {
	Query: {
		user,
		users
	}
}