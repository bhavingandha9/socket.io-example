const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = app.listen(2000);
const path = require('path');
const io = socketIO(server);
const redisSocket = require('socket.io-redis');
app.use(express.static(path.join(__dirname, 'public')));

io.adapter(redisSocket({
  host: 'localhost',
  port: 6379
}))

io.on('connection', (socket) => {
  io.emit('event_name', { name: 'web web web' })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})