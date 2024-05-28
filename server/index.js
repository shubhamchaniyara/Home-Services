const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const homeRoutes = require('./home');
const loginWorkerRoutes = require('./loginworker');
const loginUserRoutes = require('./loginuser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/home', homeRoutes);
app.use('/loginworker', loginWorkerRoutes);
app.use('/loginuser', loginUserRoutes);

app.listen(8080, () => {
    console.log("Server started on port 8080");
});
