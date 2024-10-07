export default function getListStudentIds(students) {
  if (Array.isArray(students) === false) {
    return [];
  }
  return students.map((student) => student.id);
}
