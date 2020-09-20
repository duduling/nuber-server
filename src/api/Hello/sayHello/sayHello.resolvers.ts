import { SayHelloQueryArgs, SayHelloResponse } from 'src/types/graph.d'

const resolvers = {
	Query: {
		sayHello: (_, { name }: SayHelloQueryArgs): SayHelloResponse => {
			return {
				text: `Hello ${name}`,
				error: false,
			}
		},
	},
}

export default resolvers
