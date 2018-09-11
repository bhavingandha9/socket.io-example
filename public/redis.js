const socket = io();
socket.on(('connect'), () => {
  console.log("Connected to server successfully");
});

socket.on('event_name', (data) => {
  console.log(data);
})