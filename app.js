const sendSms = document.getElementById('send-sms');

sendSms.addEventListener('click', ()=>{
  fetch('https://amda-amazon.herokuapp.com/add-proyect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    //mode: 'no-cors',
    body: JSON.stringify({
      data: {
        comunity: [
          {
            phone: 923003956,
            nameComunity: 'ZARUMIRISA',
            dateR: '20-10-2019',
            hourR: '6 p.m.',
            lang: 'es'
          }
        ],
        proyectName: 'TIA MARIA',
        typeProyect: '', //farming, electricity, hydrocarbons, mining, transport
        statusProyect: 1 //1, 2, 3
      }
    })
  }).then(res => console.log(res))
})
//fetch('https://amda-amazon.herokuapp.com/pull-proyect')
//.then(data => data)
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
