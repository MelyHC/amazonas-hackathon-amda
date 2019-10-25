const sendSms = document.getElementById('send-sms');

// const inputText = document.getElementById("input-text");
// const name_comunidad= document.getElementById("myInput");
// const inputFecha = document.getElementById("input_fecha");
// const inputHora = document.getElementById("input_hora");


sendSms.addEventListener('click', ()=>{
const data = {
  comunity,
  proyectName: inputText.value,
  typeProyect: '', //farming, electricity, hydrocarbons, mining, transport
  statusProyect: 1 //1, 2, 3
}
  fetch('https://amda-amazon.herokuapp.com/add-proyect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    //mode: 'no-cors',
    body: JSON.stringify({
      data
    })
  }).then(res => res.json())
  .then(myJson =>{
    console.log(myJson)
    if(myJson.resp_cod == 0) {
      console.log(myJson)
      fetch('https://amda-amazon.herokuapp.com/send-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    //mode: 'no-cors',
    body: JSON.stringify({
      data
    })}).then(res =>res.json())
    .then(data => console.log(data))
    } else {
      alert('No se pudo guardar el proyecto')
    }
  })
})



fetch('https://amda-amazon.herokuapp.com/pull-proyect')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.data);
  });
//comunity: [
  //{
    //phone: 923003956,
    //nameComunity: 'ZARUMIRISA',
    //dateR: '20-10-2019',
    //hourR: '6 p.m.',
    //lang: 'es'
  //}
//],
//proyectName: 'TIA MARIA',
//typeProyect: '', //farming, electricity, hydrocarbons, mining, transport
//statusProyect: 1 //1, 2, 3
//id

//fetch('https://amda-amazon.herokuapp.com/update-proyect', {
  //  method: 'POST',
    //headers: {
      //'Content-Type': 'application/json'
    //},
    //dataType: 'json',
//    body: JSON.stringify({
  //    data: {
    //    comunity: [
      //    {
        //    phone: 923003956,
          //  nameComunity: 'ZARUMIRISA',
            //dateR: '20-10-2019',
          //  hourR: '6 p.m.',
          //  lang: 'es'
          //}
        //],
        //id: id del proyecto
        //statusProyect: 1 //1, 2, 3 
      //}
    //})
  //}).then(res => console.log(res))
const arrUser = [{ phone: 929940441, name: 'Mely' }, { phone: 985153678, name: 'Katya' }, { phone: 943996564, name: 'Rosemarie' }, { phone: 977572570, name: 'Sandra' }, { phone: 923003956, name: 'Lizeth' }]
