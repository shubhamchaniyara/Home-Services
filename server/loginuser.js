// const express = require('express');
// //const server = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose=require('mongoose');
// const router = express.Router();
// console.log("hellouser");

// mongoose.connect("mongodb+srv://shubham:shubham@cluster0.vlehkg9.mongodb.net/workerlist?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>console.log("mongoose connected"))
// .catch(err=>console.log("error generate",err));


// const userSchema=new mongoose.Schema({
//   email:{
//     type:String,
//     required:true,
//     unique:true,
//   },
//   password:{
//     type:String,
//     required:true,
//   },
// });
// const User=mongoose.model("usercollection",userSchema);

// router.post('/signup',async (req, res) => {
//     console.log(req.body);
//     const c = req.body.email;
//     const d = req.body.password;
//     try {
//     const result = await User.create({
//       email: c,
//       password: d,
//     });
//     res.json({ message: "Task received and saved"});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error saving task" });
//   }
//   });


// router.post('/login', async (req, res) => {
//     console.log(req.body, "check");
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email, password });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         res.json({ message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
//     console.log("avy");
// });


//   module.exports = router;


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("UserCollection", userSchema);

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await User.create({ email, password });
    res.json({ message: "Task received and saved" });
  } catch (error) {
    console.error("Error saving task:", error);
    res.status(500).json({ message: "Error saving task" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;
