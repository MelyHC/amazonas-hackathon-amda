const Response = require('../res-message');
const { admin } = require('../firebase-config');

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

const addProyect = (req, res) => {
  console.log('Model: addProyect');
  const { comunity, proyectName, typeProyect, statusProyect } = req.body.data;

  //comunity = comunity.map(comu => {
    //const date = new Date();
    //const name = comu.nameComunity.toLowerCase();
    //const id = `${name.split(' ').join('')}${date}`;

    //return { ...comu, id }
  //})

  db.collection('proyects').add({
    proyectName,
    comunity,
    typeProyect,
    statusProyect,
    date: FieldValue.serverTimestamp()
  }).then(ref => {
    console.log('Added document with ID: ', ref.id);
    const resp = Response(0, 'Se guardo correctamente los proyectos', []);
    res.send(JSON.stringify(resp));
  }).catch(err => {
    const resp = Response(1, 'Error no se pudo guardar los datos', err);
    res.send(JSON.stringify(resp));
  })
}

const pullProyect = (req, res) => {
  console.log('Model: pullProyect');

  db.collection('proyects').get()
    .then((snapshot) => {
      const data = [];

      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());

        data.push({ ...doc.data(), id: doc.id });
      });
      const resp = Response(0, 'Proyectos guardados', data);
      res.send(JSON.stringify(resp));
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      const resp = Response(1, 'Error no se pudo traer los datos', err);
      res.send(JSON.stringify(resp));
    });

}

const updateProyect = (req, res) => {
  console.log('Model: updateProyect');

  const { id, comunity, statusProyect } = req.body.data;

  db.collection('proyects').doc(`${id}`).update({
    comunity,
    date: FieldValue.serverTimestamp(),
    statusProyect
  }).then(() => {

    const resp = Response(0, 'Proyectos actualizados', []);
    res.send(JSON.stringify(resp));
  })
    .catch((err) => {
      console.log('Error getting documents', err);
      const resp = Response(1, 'Error no se pudo actualizar los datos', err);
      res.send(JSON.stringify(resp));
    });
}
module.exports.addProyect = addProyect;
module.exports.pullProyect = pullProyect;
module.exports.updateProyect = updateProyect;