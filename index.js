var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function serverResponse(req, res) {
  res.send('<p>Express works</p>');
});

http.listen(3001, function serverListener() {
  console.log('listening on *:3001');
});
