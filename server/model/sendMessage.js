const twilio = require('twilio');
const Response = require('../res-message');

const { TWILIO_KEY, TWILIO_PASS, PHONE } = process.env;
const { prefix } = require('../config');

const client = new twilio(TWILIO_KEY, TWILIO_PASS);

const sendSms = (req, res) => {
  console.log('Model: sendSMS');
  const { comunity, proyectName, statusProyect, typeProyect } = req.body.data;

  comunity.forEach(({ phone, nameComunity, dateR, hourR, lang }) => {

    const language = require(`../sms-lang/${lang.toLowerCase()}`);

    client.messages.create({
      to: `${prefix}${phone}`,
      from: PHONE,
      body: `${language.today} ${dateR} (${hourR})
  ${language.participation} ${language[`${statusProyect}`]} ${language.taller}
  ${language.proyect} ${proyectName}
  ${language.sector} ${language[`${typeProyect}`]}
  ${language.place} ${nameComunity}
  ${language.return} ${PHONE}`
    }).then(message => {
      console.log(message)
    });

//    este 25 de Octubre (3:00pm)*
// Participa en el 1er Taller 
// Proyecto:  Nombre del Proyecto 
// Sector: [sector que pertenece]
// lUGAR: [comunidad]
// si desea comunicarse lla al ....
  });
  const resp = Response(0, 'Se envio correctamente el mensaje', []);
  res.send(JSON.stringify(resp));
}

module.exports.sendSms = sendSms;