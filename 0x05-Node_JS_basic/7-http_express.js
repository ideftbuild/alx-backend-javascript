#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const db = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = 'This is the list of our students';
  const result = {};
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
});

app.listen(1245);

module.exports = app;
