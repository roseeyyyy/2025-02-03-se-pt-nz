const express = require("express");
require("dotenv").config();
let dbConnect = require ("../mysql-app/dbConnect")
let userRoutes = require('./routes/userRoutes');

const app = express.request;

app.use('/api/users', userRoutes);

