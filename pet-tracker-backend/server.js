// Load environment variables from .env
require('dotenv').config();

// Import required libraries
const express = require('express');
const mongoose = require('mongoose');

// Initialize the app
const app = express();
app.use(express.json()); // So we can read JSON bodies in requests

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(' MongoDB connected successfully!'))
  .catch((err) => console.error(' MongoDB connection error:', err));

// Simple test route
app.get('/', (req, res) => {
  res.send('🐾 Pet Tracker API is running');
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
