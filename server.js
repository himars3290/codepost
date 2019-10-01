const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
require('custom-env').env();


const app = express();

const api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serve static files
app.use(express.static(path.join(__dirname, 'dist')));

//set api routes
app.use('/api', api);

//return other routes to angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.PORT || '3000';
app.set('port', port);

//create the HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}`));
