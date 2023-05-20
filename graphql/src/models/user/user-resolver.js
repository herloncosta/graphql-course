const user = () => ({ id: 'as969d', name: 'Herlon Costa' })
const users = () => []

export const userResolver = {
	Query: {
		user,
		users
	}
}