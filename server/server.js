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
app.use(express.static('public'));

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
  io.emit('recived-message', { data: req.body.Body, from: req.body.From });
  res.sendStatus(200);
});

app.post('/send-sms', send_message);

app.post('/add-proyect', add_proyect);
app.get('/pull-proyect', pull_proyect);
app.post('/update-proyect', update_proyect);

app.post('/add-comunity', add_comunity);
app.get('/pull-comunity', pull_comunity);

io.on('connection', socket => {
  console.log('sms conectado');
  //Here we listen on a new namespace called "incoming data"
  socket.on("recived-message", (data) => {
    //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    socket.broadcast.emit("recived-sms", data);
  });

  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => console.log("Client disconnected"));
})

