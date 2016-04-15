

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello. You probably want to set the env for docker solsson/node:run-zip now to get a real app.');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
