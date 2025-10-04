require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Use your .env variable
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(' MongoDB connected successfully!'))
  .catch((err) => console.error(' MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('🐾 Pet Tracker API is running');
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
