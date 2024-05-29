const express = require('express');
//const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const router = express.Router();
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

router.post('/addworker',async (req, res) => {
    console.log(req.body);
  
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


  router.get('/getAllAdmins', async (req, res) => {
    try {
      const admins = await worker.find({});
      res.json(admins);
    } catch (error) {
      console.error("Error fetching admins:", error);
      res.status(500).json({ message: "Error fetching admins" });
    }
  });

  router.get('/fetchworker', async (req, res) => {
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

  router.post('/login', async (req, res) => {
    console.log(req.body, "check");
    const { email, password } = req.body;
    try {
        const usercheck = await worker.findOne({ email, password });
        if (!usercheck) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});


module.exports = router;