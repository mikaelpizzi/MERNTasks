const express = require('express');
const connectDB = require('./config/db');

// Create server
const app = express();

// Connect to database
connectDB();

// App port
const PORT = process.env.PORT || 4000;

// Import routes
app.use('/api/users', require('./routes/users'));

// Start app
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})
