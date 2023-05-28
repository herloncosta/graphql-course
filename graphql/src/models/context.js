import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const context = () => {
	return {
		axios,
		getUsers: () => axios.get(`${BASE_URL}/users`),
		getUser: (id = '') => axios.get(`${BASE_URL}/users/${id}`),
		getPosts: () => axios.get(`${BASE_URL}/posts`),
		getPost: (id = '') => axios.get(`${BASE_URL}/posts/${id}`),
	}
}
