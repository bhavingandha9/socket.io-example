const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = app.listen(2000);
const path = require('path');
const io = socketIO(server);
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  //  socket.send('Hello im connected');
  //  socket.emit('event_name', { name: 'web web web' })
  //  io.emit('event_name', { name: 'web web web' })
  //  socket.broadcast.emit('event_name', { name: 'web web web' } );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})