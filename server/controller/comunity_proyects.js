const admin = require("firebase-admin");
const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

const { URLFIREBASE } = process.env;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: URLFIREBASE
});

const db = admin.firestore();
