import express from "express";
import path from "path";

const app=express();
//middleware for using public files in views=>index.ejs
app.use(express.static(path.join(path.resolve(),"public")))
//middleware for getting data from frontend
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");

// app.get("/getProducts",(req,res)=>{
//     const pathLocation=path.resolve()
//     console.log(pathLocation)
//     res.sendFile(path.join(pathLocation,'./index.html'))
// })

app.get("/",(req,res)=>{
    res.render("index",{name:"wajahat"})
})
let users=[]
// app.post("/",(req,res)=>{
//     console.log(req.body.name)
//     users.push(req.body)
//     res.render("success")
// })
app.post("/",(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.redirect("/success")
})
app.get("/success",(req,res)=>{
    
    res.render("success")
})

app.get("/getUsers",(req,res)=>{
    res.json({
        users,
    })
})

app.listen(5000,()=>{
    console.log("App listening on port")
})