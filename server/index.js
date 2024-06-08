const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');

const homeRoutes = require('./home');
const loginWorkerRoutes = require('./loginworker');
const loginUserRoutes = require('./loginuser');

require("dotenv").config

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/home', homeRoutes);
app.use('/loginworker', loginWorkerRoutes);
app.use('/loginuser', loginUserRoutes);

app.listen(process.env.PORT,'0.0.0.0', () => {
    console.log("Server started on port 8080",process.env.PORT);
});
