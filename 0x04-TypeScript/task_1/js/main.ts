interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;
// usage example
console.log(printTeacher('John', 'Doe'));

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
  firstName: string;

  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';

  displayName =(): string => this.firstName;
}

// usage example
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
