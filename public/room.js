const socket = io.connect();

socket.on(('connect') ,() => {
  console.log("Connected to server.");
});

socket.on('joinedRoom', (data)=>{
  $("#messages ul").append(`<li>User ${data.user} is connected to room ${data.roomName}</li>`);
});

socket.on('message', (data) => {
  console.log(data)
  $("#messages ul").append(`<li>${data.user} : ${data.message}</li>`);
});

socket.on('disconnecting', (socket)=>{
  socket.emit('disconnecting', socket);
});

$('#joinRoom').click(()=>{
  socket.emit('joinRoom', {roomName: 'Yudiz'});
});

$('#leaveRoom').click(()=>{
  socket.emit('leaveRoom', {roomName: 'Yudiz'});
});

$("form").submit((e)=>{
  e.preventDefault();
  let data = new FormData(e.target);
  let message = data.get('message');
  socket.emit('newMessage', {roomName: 'Yudiz', message: message}, (msg)=>{
    console.log(msg)
  });
});