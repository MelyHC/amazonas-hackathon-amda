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
            lang: 'es',
            motive: 'first'
          }
        ],
        proyectName: 'TIA MARIA'
      }
    })
  }).then(res => console.log(res))
})

//nameComunity, dateR, hourR, lang, proyectName, motive

const arrUser = [{ phone: 929940441, name: 'Mely' }, { phone: 985153678, name: 'Katya' }, { phone: 943996564, name: 'Rosemarie' }, { phone: 977572570, name: 'Sandra' }, { phone: 923003956, name: 'Lizeth' }]
