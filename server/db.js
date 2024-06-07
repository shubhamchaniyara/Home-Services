// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://shubham:shubham@cluster0.vlehkg9.mongodb.net/workerlist?retryWrites=true&w=majority&appName=Cluster0", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log("Mongoose connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
