#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const db = process.argv[2];
const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const result = {};
    fs.readFile(path, 'utf8', (error, data) => {
      let output = '';
      if (error) {
        return reject(new Error('Cannot load the database'));
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
      // Output result
      output += `Number of students: ${dataList.length}\n`;
      Object.entries(result).forEach(([field, list]) => {
        output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      });
      return resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(db)
    .then((data) => res.end(data))
    .catch((error) => res.end(error.message));
});

app.listen(1245);

module.exports = app;
