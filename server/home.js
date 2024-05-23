const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const emailRoutes = require('./emailRoutes');
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

server.get('/fetchworker', async (req, res) => {
    try {
        const { category, city } = req.query;
        const filter = {};
        if (category) filter.Category = category;
        if (city) filter.City = city;
    
        const person = await worker.find(filter);
        res.json(person);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching tasks" });
      }
  });

server.use('/api', emailRoutes);

server.listen(8080, () => {
    console.log("Server started on port 8080");
  });