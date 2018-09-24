const express = require('express');
const apps = express();

const server = require('http').createServer(apps);
const io = require('socket.io').listen(server);

apps.set('port', process.env.PORT || 3000);

io.on('connect', function (socket) {

});

server.listen(apps.set('port'), function functionName() {
  console.log('========== Start Server =============');
});
