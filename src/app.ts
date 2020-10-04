import cors from 'cors'
import { NextFunction, Response } from 'express'
import { GraphQLServer } from 'graphql-yoga'
import helmet from 'helmet'
import logger from 'morgan'
import schema from './schema'
import decodeJWT from './utils/decodeJWT'

class App {
	public app: GraphQLServer
	private middlewares = (): void => {
		this.app.express.use(cors())
		this.app.express.use(helmet())
		this.app.express.use(logger('dev'))
		this.app.express.use(this.jwt)
	}

	private jwt = async (
		req,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		const token = req.get('X-JWT')
		if (token) {
			const user = await decodeJWT(token)
			console.log(user)
			if (user) {
				req.user = user
			} else {
				req.user = undefined
			}
		}
		next()
	}

	constructor() {
		this.app = new GraphQLServer({
			schema,
		})
		this.middlewares()
	}
}

export default new App().app
