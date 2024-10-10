interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';

  getCoffeeBreak = (): string => 'Getting a coffee break';

  workDirectorTasks = (): string => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';

  getCoffeeBreak = (): string => 'Cannot have a break';

  workTeacherTasks = (): string => 'Getting to work';
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// usage
console.log(executeWork(createEmployee(600)));

console.log(teachClass('History'));
