#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require("fs");


const app = http.createServer(async (req, res) =>  {
 const url = req.url;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    // result = await countStudents(process.argv[2]);
    let output = 'This is the list of our students\n';
    const result = {};
    fs.readFile(process.argv[2], 'utf8', (error, data) => {
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
      res.setHeader('Content-Type', 'text/plain');
      res.end(output.trim('\n'));
    });
  }

});

app.listen(1245);

module.exports = app;
