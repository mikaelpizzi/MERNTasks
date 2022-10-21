const express = require('express');

// Create server
const app = express();

// App port
const PORT = process.env.PORT || 4000;

// Define main page
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Start app
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})