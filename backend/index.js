require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const specializationRoutes = require('./routes/specializationRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const db = require('./config/db');

// Middlewares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', teacherRoutes);
app.use('/api', specializationRoutes);
app.use('/api', menuItemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
