const express = require('express');
const { AuthRoutes, TaskRoutes } = require('./routes');  // Import the routes from the routes folder
const bodyParser = require('body-parser');
const connectDB = require('./config/db-config');

// Initialize express
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', AuthRoutes);  // Auth routes
app.use('/api/tasks', TaskRoutes);  // Task routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;  // Export app for testing purposes
