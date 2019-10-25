const twilio = require('twilio');
const Response = require('../res-message');

const { TWILIO_KEY, TWILIO_PASS, PHONE } = process.env;
const { prefix } = require('../config');

const client = new twilio(TWILIO_KEY, TWILIO_PASS);

const sendSms = (req, res) => {
  console.log('Model: sendSMS');
  const { comunity, proyectName } = req.body.data;

  comunity.forEach(({ phone, nameComunity, dateR, hourR, lang, motive }) => {

    const language = require(`../sms-lang/${lang.toLowerCase()}`);

    client.messages.create({
      to: `${prefix}${phone}`,
      from: PHONE,
      body: `${language[`${motive}`]}
  ${language.date}: ${dateR}
  ${language.hour}: ${hourR}
  ${language.place} ${nameComunity}
  ${language.proyect} ${proyectName}
  ${language.return} ${PHONE}`
    }).then(message => {
      console.log(message)
    });
  });
  const resp = Response(0, 'Se envio correctamente el mensaje', []);
  res.send(JSON.stringify(resp));
}

module.exports.sendSms = sendSms;