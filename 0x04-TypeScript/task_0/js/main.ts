// main.ts
/* eslint-env browser */

// Step 1: Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Step 2: Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Step 3: Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Step 4: Render a table with student data
const renderTable = (students: Student[]): void => {
  const table: HTMLTableElement = document.createElement('table');
  table.style.width = '100%';
  table.setAttribute('border', '1');

  // Create table header
  const headerRow: HTMLTableRowElement = table.insertRow();
  const headerCell1: HTMLTableCellElement = headerRow.insertCell();
  headerCell1.textContent = 'First Name';
  const headerCell2: HTMLTableCellElement = headerRow.insertCell();
  headerCell2.textContent = 'Location';

  // Append each student to the table
  students.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2: HTMLTableCellElement = row.insertCell();
    cell2.textContent = student.location;
  });

  // Append the table to the body
  document.body.appendChild(table);
};

// Call the render function
renderTable(studentsList);
