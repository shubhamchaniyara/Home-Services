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

const userDetailsSchema = new mongoose.Schema({
  workeremail: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Declined'],
    default: 'Pending',
  },
});
const userDetails = mongoose.model("UserDetails", userDetailsSchema);

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

  server.post('/apply', async (req, res) => {
    const workeremail= req.body.taskEmail;
    const userEmail= req.body.userEmail;
    const username=req.body.username;
    const address= req.body.address;
  try {
    const result = await userDetails.create({
      workeremail,
      userEmail,
      username,
      address,
    });
    res.json({ message: "User details received and saved" });
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ message: "Error saving user details" });
  }
  });

  server.get('/fetchuser', async (req, res) => {
    try {
      const userDetail = await userDetails.find({});
      res.json(userDetail);
    } catch (error) {
      console.error("Error fetching user details:", error);
      res.status(500).json({ message: "Error fetching user details" });
    }
  });

  server.post('/updateUserStatus', async (req, res) => {
    const { id, status } = req.body;
    try {
      await userDetails.findByIdAndUpdate(id, { status });
      res.json({ message: "Status updated successfully" });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Error updating status" });
    }
  });
  



server.listen(8080, () => {
    console.log("Server started on port 8080");
  });