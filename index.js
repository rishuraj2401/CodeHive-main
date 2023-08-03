import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import path from "path";
// http = require('http');
// import conn from './conn';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
// import connectDB from "./connectMongoDb.js";
// require("./conn");
dotenv.config();
// connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const DATABASE_URL = process.env.CONNECTION_URL


mongoose.connect("mongodb+srv://rishuraj2401:Rishu%402002@cluster0.twrql.mongodb.net/mydata" ,
{useNewUrlParser:true , useUnifiedTopology:true,autoIndex:true}
).then(()=>{
    console.log("conection successfulllll");
}).catch((e)=>{
    console.log("error in connection" + e);
})

if ("production" == "production") {
   
 
    app.use(express.static(path.resolve(__dirname, "./client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
    })
}


app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});



// "mongodb+srv://20cs3025:OZrc34X3LL8ZdPFf@cluster0.ld8iepa.mongodb.net/test"