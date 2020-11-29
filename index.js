var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function serverResponse(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3001, function serverListener() {
  console.log('listening on *:3001');
});
