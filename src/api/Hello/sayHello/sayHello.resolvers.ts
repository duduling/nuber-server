import { Greeting } from '../../../types/graph.d'

const resolvers = {
	Query: {
		sayHello: (): Greeting => {
			return {
				text: 'love you',
				error: false,
			}
		},
	},
}

export default resolvers
