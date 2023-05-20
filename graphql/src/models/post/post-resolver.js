const posts = () => [
	{
		id: '13242e4',
		title: 'Primeiros Passos com GraphQL e Apollo Server'
	},
	{
		id: '13242e5',
		title: 'Primeiros Passos com GraphQL e Apollo Server'
	},
	{
		id: '13242e6',
		title: 'Primeiros Passos com GraphQL e Apollo Server'
	}
]

const post = () => ({
	id: '13242e4',
	title: 'Primeiros Passos com GraphQL e Apollo Server'
})

export const postResolver = {
	Query: {
		post,
		posts
	}
}