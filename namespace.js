const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = app.listen(2000);
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const io_s = socketIO(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
});

const io1 = io_s.of('/namespace1');
const io2 = io_s.of('/namespace2');

io1.on('connection', (socket) => {
  socket.send('Hello im connected with io1');
});
io2.on('connection', (socket) => {
  socket.send('Hello im connected with io2');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})