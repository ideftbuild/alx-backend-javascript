#!/usr/bin/node
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!'); // response body
  } else if (url === '/students') {
    const result = {};
    let output = 'This is the list of our students';
    const db = process.argv[2];
    // get data from database if passed
    if (!db) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    } else {
      fs.readFile(db, 'utf8', (error, data) => {
        if (error) {
          res.statusCode = 500;
          res.end('Cannot load the database');
          return;
        }
        const dataList = data.trim().split('\n').slice(1);
        // Process each line
        dataList.forEach((line) => {
          const fields = line.trim().split(',');
          const [firstName, , , field] = fields;
          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstName);
        });
        // Store result
        output += `\nNumber of students: ${dataList.length}`;
        Object.entries(result).forEach(([field, list]) => {
          output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        });
        res.end(output); // response body
      });
    }
  }
});

app.listen(1245);

module.exports = app;
