// const fs = require("fs");
const fs = require("fs");

// fs.mkdir("assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created successfully");

//     const dataobj = {
//       name: "vineeth",
//       age: 20,
//     };

//     fs.writeFile("./assets/data.json", JSON.stringify(dataobj), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file created successfully and data added into file");
//       }
//     });
//   }
// });

// fs.readdir("./", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const dirname = "assets";
//     // const dataobj = {
//     //   "name": "vineeth",
//     //   "age": 20,
//     // };
//     if (data.includes(dirname)) {
//       fs.writeFile(
//         "./assets/data.json",
//         JSON.stringify(
//         {
//           name: "vineeth",
//           age: 20,
//         }),
//         (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("file created successfully and data added into file");
//           }
//         }
//       );
//     }
//   }
// });

// fs.rename("./data", "./studentData", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("renamed successfully for folder")
//     }
// })

// fs.rename("./studentData/hello.txt", "./studentData/studentData.txt", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("renamed successfully for folder")
//     }
// })

// fs.rmdir("./uav", (err) =>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("delete folder successfully")
//     }
// })

// const a =  fs.existsSync("./assets/data.json")
// console.log(a)
// const a =  fs.existsSync("./studentData")
// console.log(a)

// const ab = {
//       age: "26",
//       gender: " male",
// };

// if (fs.existsSync("./assets")) {
//   console.log("folder present");
//   if (fs.existsSync("./assets/data.json")) {
 
//     fs.appendFile("./assets/data.json", JSON.stringify(ab), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("data added ");
//       }
//     });
//   }
//   else{
//     fs.writeFile("./assets/data.json", JSON.stringify(ab), (error)=> {
//         if(error){
//             console.log(error)
//         }
//         else{
//             console.log("file created successfully")
//         }
//     })
//   }
// }


// streams


// function readFile(){
//     fs.readFile("./filghtdata/flights-1m-parquet.json", "utf-8").then(res=>console.log(res))
// }

// console.log(readFile())


// const stream = fs.createReadStream("./filghtdata/flights-1m-parquet.json", "utf-8")
// let data = "";
// stream.on("data",(chunk)=>{
//      console.log(chunk)
// })
// stream.on("data",(chunk)=>{
//      data+=chunk
// })
// stream.off("data",()=>{
//     console.log(data)
// })

// console.log(data)


// const writeStreams =  fs.createWriteStream("./assets/dummy.txt")

// writeStreams.write("hi hello")

// writeStreams.write("how are you")


// console.log("hiii")

// writeStreams.write("how you doing")


// writeStreams.end()


// const stream = fs.createWriteStream("./assets/hi.txt")
// for(let i = 0; i<1000; i++){
//     stream.write(`i ${i}`)

// }
// stream.end()

const readStream = fs.createReadStream("./filghtdata/flights-1m-parquet.json")
console.log(readStream)

const writeStream = fs.createWriteStream("./assets/filght.json")

readStream.pipe(writeStream)
