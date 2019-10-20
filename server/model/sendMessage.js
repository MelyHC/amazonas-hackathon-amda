const twilio = require('twilio');
const Response = require('../res-message');

const { key_twilio, pass_twilio, phone_send, prefix } = require('../config');
const client = new twilio(key_twilio, pass_twilio);

var Respuesta = function (resp_cod, resp_msg, data) {
  this.resp_cod = resp_cod;
  this.resp_msg = resp_msg;
  this.data = data;
};

const sendSms = (req, res) => {
  console.log('Model: sendSMS');
  const comunity = req.body.data.comunity;

  comunity.forEach(({ phone, nameComunity, dateR, hourR, lang, proyectName, motive }) => {

    const language = require(`../sms-lang/${lang.toLowerCase()}`);

    client.messages.create({
      to: `${prefix}${phone}`,
      from: phone_send,
      body: `${language[`${motive}`]}
  ${language.date}: ${dateR}
  ${language.hour}: ${hourR}
  ${language.place} ${nameComunity}
  ${language.proyect} ${proyectName}
  ${language.return} ${phone_send}`
    }).then(message => { 
      console.log(message) 
    });
  });
  const resp = new Respuesta(0, 'Se envio correctamente el mensaje', []);
  res.send(JSON.stringify(resp));
}
//arrUser.forEach(({ phone, name }) => sendSms(phone, name));

module.exports.sendSms = sendSms;