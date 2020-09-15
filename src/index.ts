import { Options } from 'graphql-yoga'
import app from './app'

const PORT: number | string = process.env.PORT || 4000
const PLAYGROUND_ENDPOINT: string = '/playground'
const GRAPHQ_ENDPOINT: string = '/graphql'

const appOptions: Options = {
	port: PORT,
	playground: PLAYGROUND_ENDPOINT,
	endpoint: GRAPHQ_ENDPOINT,
}

const handleAppStart = (): void => console.log(`Listening on port ${PORT}`)

app.start(appOptions, handleAppStart)
