#!/usr/bin/node
const fs = require('fs');

module.exports = function countStudents(path) {
  let data = null;
  const result = {};
  try {
    data = fs.readFileSync(path, 'utf8').trim().split('\n').slice(1);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  // Process each line
  data.forEach((line) => {
    const fields = line.trim().split(',');
    const [firstName, , , field] = fields;
    if (!result[field]) {
      result[field] = [];
    }
    result[field].push(firstName);
  });

  // Output result
  console.log(`Number of students: ${data.length}`);
  Object.entries(result).forEach(([field, list]) => {
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  });
};
