const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
console.log("hello");

mongoose.connect("mongodb://127.0.0.1:27017/workerlist")
.then(()=>console.log("mongoose connected"))
.catch(err=>console.log("error generate",err));

const userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  Number:{
    type:String,
    required:true,
    unique:true,
  },
  Category:{
    type:String,
    required:true,
  },
  City:{
    type:String,
    required:true,
  },
});
const worker=mongoose.model("user",userSchema);

server.use(cors());
server.use(bodyParser.json());

server.post('/addworker',async (req, res) => {
    console.log(req.body);
    // console.log(req.body.formD);
    // console.log(req.body.formDetails.category);
    const a = req.body.firstname;
    const b = req.body.lastname;
    const c = req.body.email;
    const d = req.body.password;
    const e = req.body.number;
    const f = req.body.category;
    const g = req.body.city;
    try {
    const result = await worker.create({
      firstName: a,
      lastName: b,
      email: c,
      password: d,
      Number: e,
      Category: f,
      City: g,
    });
    res.json({ message: "Task received and saved"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving task" });
  }
  });



server.listen(8080, () => {
    console.log("Server started on port 8080");
  });