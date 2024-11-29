#!/usr/bin/node
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

server.listen(1245);
