# sms-notifier
SMS notifier for email
`Get notfified by Twilio SMS API when a specific email arrives to your inbox`

# Steps to setup
## Clone the repository

`git clone https://github.com/vamzi/sms-notifier.git`

## Create a .env file with following template
### Setup your twilio account
### Enable IMAP access on you email account
```
USERNAME=example@example.com
PASSWORD=app-specific-password
IMAP_HOST=imap.example.com
IMAP_PORT=993

MAIL_SUBJECT_REGEX=example|Example|EXAMPLE
MAIL_BODY_REGEX="EXAMPLE 1|Example 1"

TWILIO_ACCOUNT_SID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
TWILIO_AUTH_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
SMS_SEND_MOBILE=+1XXXXXXXXXX
SMS_RECEIVE_MOBILE=+1XXXXXXXXXX
```

## Now start the app

`npm start`

### Now you have completed setting up sms-notifier


