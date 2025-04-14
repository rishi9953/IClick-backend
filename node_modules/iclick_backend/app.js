const express = require('express');
const mainRoutes = require('./routes/mainRoutes.js'); // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Use user routes
app.use('/', mainRoutes);

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});