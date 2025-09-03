const students = [
  { id: 1, name: "sharath", class: 1 },
  { id: 2, name: "rethivk", class: 2 },
];

exports.getAllStudents = () => {
  return students;
};
exports.getStudentById = (studentId) => {
  const data = students.find((student) => student.id === studentId);
  return data;
};

exports.getClasses = () => {
  const data = students.map((item) => item.class);
  return data;
};
