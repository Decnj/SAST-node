// Import Express
const express = require('express');

// Create express instance
const app = express();

// Define routes
app.get('/', (req, res) => res.send('Express server'));

// Start express server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

