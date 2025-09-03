// const add = require("./math.js");
// const sub = require("./math.js");

// const math = require("./math.js");

const { add, sub, division, multiply } = require("./math.js");
const { getAllStudents, getStudentById, getClasses } = require("./student.js");
console.log(getAllStudents());
console.log(getStudentById(1));
console.log(getClasses());

console.log(add(1, 2));
console.log(sub(5, 2));
console.log(division(1, 2));

// console.log(math.add(1, 2));
// console.log(math.sub(2, 2));
// console.log(math.division(4, 2));

// console.log(add(1, 2));
// console.log(sub(5, 3));

// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// const division = (a, b) => {
//   return a / b;
// };

// console.log(add(1, 2));

// console.log(sub(3, 2));

// console.log(division(5, 2));

// const students = [
//   { id: 1, name: "sharath", class: 1 },
//   { id: 2, name: "rethivk", class: 2 },
// ];

// const getAllStudents = () => {
//   return students;
// };

// console.log(getAllStudents());

// const getStudentById = (id) => {
//   const data = students.find((value) => value.id == id);
//   return data;
// };
// console.log(getStudentById(2));
