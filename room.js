const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = app.listen(2000);
const path = require('path');
const io = socketIO(server);
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {

  console.log('connected', socket.id);

  socket.on('joinRoom', (data)=>{
    socket.join(data.roomName);
    socket.in(data.roomName).emit('joinedRoom', {roomName: data.roomName, user: socket.id});
  })
 
  socket.on('leaveRoom', (data)=>{
    socket.leave(data.roomName);
    console.log(`${socket.id} leaved room ${data.roomName}`);
  })

  socket.on('disconnecting', ()=>{
    let rooms = Object.keys(socket.rooms);
    console.log('disconnecting', rooms);
  });

  socket.on('newMessage', (data, cb)=>{
    io.in(data.roomName).send({user: socket.id, message:data.message});
    cb('Message sent');
  });

});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})