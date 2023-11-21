const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If CORS is needed

const app = express();
const PORT = process.env.PORT || 3001; // Set the port

// Middleware setup
app.use(express.json()); // Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Enable CORS if needed (for development purposes)
app.use(cors());

// MongoDB Atlas connection string or local MongoDB URL
const mongoURI = 'mongodb://localhost/chat-rat';

// Connect to MongoDB Atlas or local database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Other options as needed
  })
  .then((db) => {
    console.log('MongoDB connected:', db.connection.host);
    // Start the server after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
  
// Define your routes and other server configurations below
// ...
