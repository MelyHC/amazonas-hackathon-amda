const Response = require('../res-message');
const { addUserComunity, pullComunity } = require('../model/userComunity');

const validate_comunity = (req, res, callback) => {
  console.log('Controller: validate_comunity');

  const body = req.body;
  const { nameComunity, phone } = body.data;


  if (body == undefined || body == null || body.data == undefined || body.data == null) {
    const resp = Response(1, 'Error body o data no definidos', []);
    res.send(JSON.stringify(resp));

  } else if (nameComunity == undefined || nameComunity == null) {
    const resp = Response(1, 'Error nombre de comunidad no definido', []);
    res.send(JSON.stringify(resp));

  } else if (phone == undefined || phone == null) {
    const resp = Response(1, 'Error telefono de comunidad no definido', []);
    res.send(JSON.stringify(resp));

  } else {
    callback(req, res);
  }
}

const add_comunity = (req, res) => {
  console.log('Controller: add_comunity');
  validate_comunity(req, res, addUserComunity);
}

const pull_comunity = (req, res) => {
  console.log('Controller: pull_comunity');
  pullComunity(req, res);
}

module.exports.add_comunity = add_comunity;
module.exports.validate_comunity = validate_comunity;
module.exports.pull_comunity = pull_comunity;