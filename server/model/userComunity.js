const Response = require('../res-message');
const { admin } = require('../firebase-config');

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

const addUserComunity = (req, res) => {
  console.log('Model: addUserComunity');
  const { nameComunity, phone, linguisticFamily, indigenousPeople, totalPopulation, river, location, coordinates } = req.body.data;

  db.collection('comunity').add({
    nameComunity,
    phone,
    linguisticFamily,
    indigenousPeople,
    totalPopulation,
    river,
    location,
    coordinates,
    date: FieldValue.serverTimestamp()
  }).then(ref => {
    console.log('Added document with ID: ', ref.id);
    const resp = Response(0, 'Se guardo correctamente una comunidad', []);
    res.send(JSON.stringify(resp));
  }).catch(err => {
    const resp = Response(1, 'Error no se pudo guardar los datos', err);
    res.send(JSON.stringify(resp));
  })
}

const pullComunity = (req, res) => {
  console.log('Model: pullComunity');

  db.collection('comunity').get()
    .then((snapshot) => {
      const data = [];

      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());

        data.push({ ...doc.data(), id: doc.id });
      });
      const resp = Response(0, 'Comunidades guardadas', data);
      res.send(JSON.stringify(resp));
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      const resp = Response(1, 'Error no se pudo traer los datos', err);
      res.send(JSON.stringify(resp));
    });

}

module.exports.addUserComunity = addUserComunity;
module.exports.pullComunity = pullComunity;