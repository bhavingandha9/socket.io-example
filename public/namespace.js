const socket1 = io('/namespace1');
const socket2 = io('/namespace2');

//namespace
socket1.on('connect', () => {
  console.log("socket1", "Connected to server successfully");
});

socket1.on('message', (message) => {
  console.log("socket1", message)
});

// namespace2
socket2.on('connect', () => {
  console.log("socket2", "Connected to server successfully");
});

socket2.on('message', (message) => {
  console.log("socket2", message)
});





// , { forceNew: true }