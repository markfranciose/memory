var app = require('express')();
var http = require('http').createServer(app);
var sockets = require('socket.io')(http);

app.get('/', function serverResponse(req, res) {
  res.sendFile(__dirname + '/index.html');
});

sockets.on('connection', function socketHW(socket) {
  console.log('we connect');
})

http.listen(3001, function serverListener() {
  console.log('listening on *:3001');
});
