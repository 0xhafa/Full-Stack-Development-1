const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
})

// socket.io, I choose you
const io = require('socket.io')(server, {allowEIO3: true});

io.on('connection', (client) => {
    // now we have a client object!
    console.log("Connection accepted.");
  
    client.on('message', function(message){
        console.log(`Recieved message: ${message} - from client`);
    });
  
    client.on('disconnect', function(){
        console.log("Disconnected...");
    });
});

server.listen(8080);

