const admin = require("firebase-admin");
const { URLFIREBASE } = process.env

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: URLFIREBASE
});