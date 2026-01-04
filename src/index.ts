// import {createServer} from 'http';

// const server  = createServer((req,res)=>{
//     //set headers so browser can read

//     res.setHeader("Content-type","application/json")

//     if(req.url == '/'){
//         res.writeHead(200);
//         res.end(JSON.stringify({message : "Hello"}))
//     }
// });

// server.listen(3000,()=>{
//     console.log("server is running");
// })

import express from "express";

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

app.get("/",(req,res)=>{
    res.status(200).json({message: "Hello from server!"});
})

//MVC - Model View Controller
//M - Data/Model - handle data logic
//V - User Interface - handle presentation logic
//C - Logic to connect M and V - handle user input and interactions
//REST - Representational State Transfer
//API - Application Programming Interface
//CRUD - Create Read Update Delete
//HTTP Methods - GET, POST, PUT, DELETE
//Status Codes - 200, 201, 400, 404, 500