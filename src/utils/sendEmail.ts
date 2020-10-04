import Mailgun from 'mailgun-js'

const mailGunClient = new Mailgun({
	apiKey: process.env.MAILGUN_API_KEY || '',
	domain: 'sandbox6a196ad170d34d1391a5b3cfd301bf7d.mailgun.org',
})
