const fs = require("fs");
const path = require("path");

// console.log(path.basename("./data/student.txt"));
// console.log(path.extname("./data/student.txt"));
// console.log(path.dirname("./data/student.txt"));
// console.log(path.join("html", "data", "index.html"));
console.log(__dirname);
// console.log(__filename);

// fs.readFile(path.join(__dirname, "data", "hello.txt"), (err, data) => {
//   console.log(data.toString());
// });
console.log("hi");
const d = fs.readFileSync(path.join(__dirname, "data", "names.txt"));

console.log(d.toString());

fs.writeFileSync(path.join(__dirname, "data", "names.txt"), "sharath");

// fs.writeFile(
//   path.join(__dirname, "data", "names.txt"),
//   "sharath",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("data added successfully");
//   }
// );

fs.readFile(path.join(__dirname, "data", "hello.txt"), (err, data) => {
  console.log(data.toString());
});
console.log("hello");
// fs.appendFile(
//   path.join(__dirname, "data", "names.txt"),
//   " good morning",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("data updated successfully in file");
//   }
// );

// fs.unlink(path.join(__dirname, "data", "names.txt"), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted successfully");
//   }
// });
