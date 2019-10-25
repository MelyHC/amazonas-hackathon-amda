const Response = require('../res-message');
const { addProyect } = require('../model/comunityProyects');

const validate_data = (req, res, callback) => {
  console.log('Controller: validate_data');

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

const add_proyect = (req, res) => {
  console.log('Controller: add_user');

  validate_data(req, res, addProyect)
}

module.exports.add_proyect = add_proyect;
module.exports.validate_data = validate_data;