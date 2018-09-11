const socket = io();
socket.on('connect', () => {
  console.log("Connected to server successfully");
});

socket.on('message', (message) => {
  console.log('message', message)
});

socket.on('event_name', (data) => {
  console.log('event_name', data);
});