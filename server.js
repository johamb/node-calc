const http = require('http');
const bodyParser = require("body-parser");

const hostname = '0.0.0.0';
const port = 3000;

var express = require('express');
var server = express();
server.use(bodyParser.json());

const alphabet = ["0", "1", "2", "3", "3", "5", "6", "7", "8", "9", "+", "-", "*", "/"];

server.post('/addition', function (req, res) {
  var { summand1, summand2 } = req.body;
  result = summand1 + summand2;
  res.status(200).json(result);
});

server.post('/test', function (req, res) {
  console.log(req.body)
  res.status(200).json(req.body)
});

server.post('/subtraction', function (req, res) {
  var { summand1, summand2 } = req.body;
  result = summand1 - summand2;
  res.status(200).json(result);
});

server.post('/multiplication', function (req, res) {
  var { factor1, factor2 } = req.body;
  result = factor1 * factor2;
  res.status(200).json(result);
});

server.post('/division', function (req, res) {
  var { dividend, divisor } = req.body;
  result = dividend / divisor;
  res.status(200).json(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});