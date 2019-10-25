const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { pingTimeout: 0, pingInterval: 500 });

const cors = require('cors');
const { port, allowedOrigins } = require('./config.js');

const { urlencoded, json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const { send_message } = require('./controller/send_message');
const { add_proyect, pull_proyect, update_proyect } = require('./controller/comunity_proyects');
const { add_comunity, pull_comunity } = require('./controller/user_comunity');

const corsOptions = {
  origin: allowedOrigins
}

const issuesoption = {
  origin: true,
  methods: ['POST'],
  credentials: false,
};



app.use(express.static(__dirname));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(cors(corsOptions));
app.options('*', cors(issuesoption));

server.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`AmDa server v1.0.0 2019  host ${host} port ${port}`)
});

app.post('/sms', (req, res) => {
  console.log('correcto');
  console.log(req.body.Body, req.body.From);
  res.writeHead(200);
  res.end();
});

app.post('/send-sms', send_message);

app.post('/add-proyect', add_proyect);
app.get('/pull-proyect', pull_proyect);
app.post('/update-proyect', update_proyect);

app.post('/add-comunity', add_comunity);
app.get('/pull-comunity', pull_comunity);

io.on('connection', () => {
  console.log('sms conectado');
})

