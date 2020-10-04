import Mailgun from 'mailgun-js'

const mailGunClient = new Mailgun({
	apiKey: process.env.MAILGUN_API_KEY || '',
	domain: 'sandbox6a196ad170d34d1391a5b3cfd301bf7d.mailgun.org',
})

const sendEmail = (subject: string, html: string) => {
	const emailData = {
		from: 'duduling20e@gmail.com',
		to: 'duduling20@gmail.com',
		subject,
		html,
	}
	return mailGunClient.messages().send(emailData)
}

export const sendVerificationEmail = (fullName: string, key: string) => {
	const emailSubject = `Hello! ${fullName}, please verify your email`
	const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`
	return sendEmail(emailSubject, emailBody)
}
