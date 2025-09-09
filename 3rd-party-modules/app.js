const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res)=>{
    res.send("hi i am server")
})

app.get("/hello", (req, res)=>{
    res.send({name:"sharath"})
})

app.post("/hello", (req, res)=>{
    res.send("hi your data is added")
})
app.put("/hello", (req, res)=>{
    res.status(201).json({
        user: "tony",
        class:8
    })})

app.patch("/hello",(req, res)=>{
    res.status(400).send("updated successfully")
})

app.delete("/hello",(req, res)=>{
    return res.status(204).send("delete successfully")
})

app.get("/user/:id", (req, res)=>{
    console.log(req.params)
    res.send("hi my roll no is " + req.params.id)
})

app.get("/student/:class/:rollno", (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send("hi my class is " +req.params.class + "roll no " + req.params.rollno + " subject is " +req.query.subject + " mark " + req.query.marks)
})

app.post("/student", (req, res)=>{ 
    

    res.json({
        message:"student info",
        name:req.body.name,
        password:req.body.password
    })
})


app.listen(8080, ()=>{console.log("server started on port 8080")})