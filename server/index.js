const express = require('express');
const connectDB = require('./config/db');

// Create server
const app = express();

// Connect to database
connectDB();

// App port
const PORT = process.env.PORT || 4000;

// Start app
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})
