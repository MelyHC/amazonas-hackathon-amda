const admin = require("firebase-admin");
const { URLFIREBASE, TYPEFIREBASE,
  PROYECTID, PRIVATRKEYID,
  PRIVATEKEY, CLIENTEMAIL,
  CLIENTID, AUTHURI, TOKENURI,
  AUTHPROVIDERX509CERTURL,
  CLIENTX509CERTURL } = process.env;

const Response = require('../res-message');

admin.initializeApp({
  credential: admin.credential.cert({
    type: TYPEFIREBASE,
    project_id: PROYECTID,
    private_key_id: PRIVATRKEYID,
    private_key: PRIVATEKEY.replace(/\\n/g, '\n'),
    client_email: CLIENTEMAIL,
    client_id: CLIENTID,
    auth_uri: AUTHURI,
    token_uri: TOKENURI,
    auth_provider_x509_cert_url: AUTHPROVIDERX509CERTURL,
    client_x509_cert_url: CLIENTX509CERTURL
  }),
  databaseURL: URLFIREBASE
});

const db = admin.firestore();

const addProyect = (req, res) => {
  console.log('Model: addProyect');
  const { comunity, proyectName } = req.body.data;

  db.collection('proyects').add({
    proyectName,
    comunity
  }).then(ref => {
    console.log('Added document with ID: ', ref.id);
    const resp = Response(0, 'Se guardo correctamente los proyectos', []);
    res.send(JSON.stringify(resp));
  }).catch(err => {
    const resp = Response(1, 'Error no se pudo guardar los datos', err);
    res.send(JSON.stringify(resp));
  })
}

module.exports.addProyect = addProyect;