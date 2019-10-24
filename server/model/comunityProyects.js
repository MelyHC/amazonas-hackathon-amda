const admin = require("firebase-admin");
const { URLFIREBASE } = process.env

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: URLFIREBASE
});