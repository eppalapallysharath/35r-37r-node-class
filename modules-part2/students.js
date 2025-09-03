const students = [
  { id: 1, name: "sharath", class: 1 },
  { id: 2, name: "rethivk", class: 2 },
];

const getAllStudents = () => {
  return students;
};

export const getStudentById = (studentId) => {
  const data = students.find((student) => student.id === studentId);
  return data;
};

export const getClasses = () => {
  const data = students.map((item) => item.class);
  return data;
};

export default getAllStudents;
