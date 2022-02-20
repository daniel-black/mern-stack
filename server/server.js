const path = require('path');
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

// Serve front-end
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('set environment to production');
  })
}

app.use(errorHandler);    // overwrites default express error handler

app.listen(PORT, console.log(`Server running on port ${PORT}`));