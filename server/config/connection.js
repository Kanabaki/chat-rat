const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('');

// Export connection 
module.exports = mongoose.connection;