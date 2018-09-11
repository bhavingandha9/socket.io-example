const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = app.listen(2001);
const path = require('path');
const io = socketIO(server);
const redisSocket = require('socket.io-redis');
app.use(express.static(path.join(__dirname, 'public')));

io.adapter(redisSocket({
  host: 'localhost',
  port: 6379
}));

io.on('connection', (socket) => {
  io.emit('event_name', { name: 'web web web' })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


let custom_id = 1;
io.engine.generateId = (req) => {
  return "custom:id:" + custom_id++; // custom id must be unique
}