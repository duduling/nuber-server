import { ConnectionOptions } from 'typeorm'

const connectionOptions: ConnectionOptions = {
	type: 'postgres',
	host: process.env.DB_ENDPOINT,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASENAME,
	synchronize: true,
	logging: true,
	entities: ['src/entity/**/*.*'],
}

export default connectionOptions
