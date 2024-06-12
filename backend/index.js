// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const specializationRoutes = require('./routes/specializationRoutes');
const db = require('./config/db');

// Middlewares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', teacherRoutes);
app.use('/api', specializationRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
