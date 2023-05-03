export const userResolver = {
	Query: {
		user: () => {
			const user = { id: 'as969d', name: 'Herlon Costa' }
			return user
		},
		users: () => []
	}
}