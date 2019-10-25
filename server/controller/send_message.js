const Response = require('../res-message');
const { sendSms } = require('../model/sendMessage');

const validate_message = (req, res, callback) => {

  console.log('Controller: validate_message');

  const body = req.body;

  if (body == undefined || body == null || body.data == undefined || body.data == null) {
    const resp = Response(1, 'Error body o data no definidos', []);
    res.send(JSON.stringify(resp));

  } else if (body.data.proyectName == undefined || body.data.proyectName == null) {
    const resp = Response(1, 'Error nombre de proyecto no definido', []);
    res.send(JSON.stringify(resp));

  } else if (body.data.comunity == undefined || !Array.isArray(body.data.comunity)) {
    const resp = Response(1, 'Error comunidades mal definidas', []);
    res.send(JSON.stringify(resp));

  } else {
    callback(req, res);
  }
}

const send_message = (req, res) => {
  console.log('Controller sendMessage');
  validate_message(req, res, sendSms);
}
//arrUser.forEach(({ phone, name }) => sendSms(phone, name));


module.exports.send_message = send_message;
module.exports.validate_message = validate_message;