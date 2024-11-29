#!/usr/bin/node
const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    const result = {};
    fs.readFile(path, 'utf8', (error, data) => {
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
      console.log(`Number of students: ${dataList.length}`);
      Object.entries(result).forEach(([field, list]) => {
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });
      return resolve(result);
    });
  });
};
