const post = async (_, args, context) => {
	const response = await context.getPost(args.id)
	const post = await response.data
	return post
}

const posts = async (_, args, context) => {
	const response = await context.getPosts()
	const posts = await response.data
	return posts
}

export const postResolver = {
	Query: {
		post,
		posts,
	},
}
