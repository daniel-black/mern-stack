const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const goalRoutes = require('./routes/goalRoutes'); 
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);    // overwrites default express error handler

app.listen(PORT, console.log(`Server running on port ${PORT}`));