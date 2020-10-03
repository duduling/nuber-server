import jwt from 'jsonwebtoken'

const createJWT = (id: number) => {
	const token = jwt.sign(
		{
			id,
		},
		process.env.JWT_TOKEN || '',
	)

	return token
}

export default createJWT
