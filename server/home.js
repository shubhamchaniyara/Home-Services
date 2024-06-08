// const express = require('express');
// //const server = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose=require('mongoose');
// const router = express.Router();
// console.log("hello");

// mongoose.connect("mongodb+srv://shubham:shubham@cluster0.vlehkg9.mongodb.net/workerlist?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>console.log("mongoose connected"))
// .catch(err=>console.log("error generate",err));

// const userDetailsSchema = new mongoose.Schema({
//   workeremail: {
//     type: String,
//     required: true,
//   },
//   userEmail: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['Pending', 'Accepted', 'Declined'],
//     default: 'Pending',
//   },
// });
// const userDetails = mongoose.model("UserDetails", userDetailsSchema);


//   router.post('/apply', async (req, res) => {
//     const workeremail= req.body.taskEmail;
//     const userEmail= req.body.userEmail;
//     const username=req.body.username;
//     const address= req.body.address;
//     const category=req.body.categoryworer;
//   try {
//     const result = await userDetails.create({
//       workeremail,
//       userEmail,
//       username,
//       address,
//       category,
//     });
//     res.json({ message: "User details received and saved" });
//   } catch (error) {
//     console.error("Error saving user details:", error);
//     res.status(500).json({ message: "Error saving user details" });
//   }
//   });

//   router.get('/fetchuser/:adminEmail', async (req, res) => {
//     const { adminEmail } = req.params;
//     try {
//       const requests = await userDetails.find({ workeremail: adminEmail });
//       res.json(requests);
//     } catch (error) {
//       console.error("Error fetching user requests:", error);
//       res.status(500).json({ message: "Error fetching user requests" });
//     }
//   });

//   router.get('/fetchuserhistory/:useremail', async (req, res) => {
//     const { useremail } = req.params;
//     try {
//       const requests = await userDetails.find({ userEmail: useremail });
//       res.json(requests);
//     } catch (error) {
//       console.error("Error fetching user requests:", error);
//       res.status(500).json({ message: "Error fetching user requests" });
//     }
//   });

//   router.post('/updateUserStatus', async (req, res) => {
//     const { id, status } = req.body;
//     try {
//       await userDetails.findByIdAndUpdate(id, { status });
//       res.json({ message: "Status updated successfully" });
//     } catch (error) {
//       console.error("Error updating status:", error);
//       res.status(500).json({ message: "Error updating status" });
//     }
//   });
  

//   module.exports = router;


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Declined'],
    default: 'Pending',
  },
});
const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

router.post('/apply', async (req, res) => {
  const { taskEmail: workeremail, userEmail, username, address, categoryworer: category } = req.body;
  try {
    const result = await UserDetails.create({
      workeremail,
      userEmail,
      username,
      address,
      category,
    });
    res.json({ message: "User details received and saved" });
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ message: "Error saving user details" });
  }
});

router.get('/fetchuser/:adminEmail', async (req, res) => {
  const { adminEmail } = req.params;
  try {
    const requests = await UserDetails.find({ workeremail: adminEmail });
    res.json(requests);
  } catch (error) {
    console.error("Error fetching user requests:", error);
    res.status(500).json({ message: "Error fetching user requests" });
  }
});

router.get('/fetchuserhistory/:useremail', async (req, res) => {
  const { useremail } = req.params;
  try {
    const requests = await UserDetails.find({ userEmail: useremail });
    res.json(requests);
  } catch (error) {
    console.error("Error fetching user requests:", error);
    res.status(500).json({ message: "Error fetching user requests" });
  }
});

router.post('/updateUserStatus', async (req, res) => {
  const { id, status } = req.body;
  try {
    await UserDetails.findByIdAndUpdate(id, { status });
    res.json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Error updating status" });
  }
});

module.exports = router;
