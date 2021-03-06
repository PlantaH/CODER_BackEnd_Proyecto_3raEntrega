const twilio = require("twilio");
const dotenv = require("dotenv").config();
 
const accountSid = `${process.env.TWILIO_SID}`;
const authToken = `${process.env.TWILIO_TOKEN}`;

const twilioClient = twilio(accountSid, authToken);

module.exports = twilioClient;