const express = require("express");
const app  = express()
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded())
app.use("/photos",express.static("uploads"))
app.use(express.static('public'))

app.use((req, res, next)=>{
    console.log(req.ip)
    const data =`$Method ${req.method} ${req.url}`
    fs.appendFile("./logger.txt", data, (err)=>{
        if(err){
            console.log(err)
        }
    } )
    next()
})



// app.get("/",(req, res)=>{
//     res.send("im server running fine")
// })

app.get("/movie",(req, res)=>{
    res.send("im movie api")
})


app.use((req, res, next)=>{
    res.status(404).json({message:"api not found", apiName:`${req.method} ${req.url}`})
})


app.listen(3000, ()=>{
    console.log("hi server is started")
})