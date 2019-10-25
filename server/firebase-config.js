const admin = require("firebase-admin");
const { URLFIREBASE, TYPEFIREBASE,
  PROYECTID, PRIVATRKEYID,
  PRIVATEKEY, CLIENTEMAIL,
  CLIENTID, AUTHURI, TOKENURI,
  AUTHPROVIDERX509CERTURL,
  CLIENTX509CERTURL } = process.env;

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

module.exports.admin = admin;