require('dotenv').config()
const notifier = require('mail-watcher');
const twilio_sms_client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const imap = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.IMAP_HOST,
  port: process.env.IMAP_PORT, // imap port
  tls: true,// use secure connection
  tlsOptions: { rejectUnauthorized: false }
};
 
notifier(imap)
  .on('mail', mail => {
      const subjectRegex = new RegExp(process.env.MAIL_SUBJECT_REGEX)
      const bodyRegex = new RegExp(process.env.MAIL_BODY_REGEX)
      if(mail.subject.match(subjectRegex)){
          sendSms(`Check your email for subject match subject: ${mail.subject}`)
      }else if(mail.html.match(bodyRegex)){
          sendSms(`Check your email for body match subject: ${mail.subject}`)
      }
  })
  .on('error',err => console.log(err))
  .start();

  function sendSms(body){
    twilio_sms_client.messages
    .create({
       body: body,
       from: process.env.SMS_SEND_MOBILE,
       to: process.env.SMS_RECEIVE_MOBILE
     })
    .then(message => {
        console.log(`SMS Notified for email subject:${mail.subject}, SMS_ID:${message.sid}`)
    });
  }