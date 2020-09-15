import cors from 'cors'
import { GraphQLServer } from 'graphql-yoga'
import helmet from 'helmet'
import logger from 'morgan'

class App {
	public app: GraphQLServer
	private middlewares = (): void => {
		this.app.express.use(cors())
		this.app.express.use(helmet())
		this.app.express.use(logger('dev'))
	}
	constructor() {
		this.app = new GraphQLServer({})
		this.middlewares()
	}
}

export default new App()
