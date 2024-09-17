import express from 'express';
import { AuthRoutes, TaskRoutes } from './routes/index.js';  // Import the routes from the routes folder
import bodyParser from 'body-parser';
import connectDB from './config/db-config.js';
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

export default app;  // Export app for testing purposes
