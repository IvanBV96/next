// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

// Initialize the Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

// Allow requests from your frontend (default localhost:3000 for React)
app.use(cors({ origin: 'http://localhost:3000' }));

// Parse incoming JSON requests
app.use(bodyParser.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Intruder alert; IP fetched',
});

// Apply the rate limiting middleware to the /api/contact route
app.post('/api/contact', limiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Simulate saving to the database (you can replace this with actual DB logic)
    console.log('Received:', { name, email, message });
    res.status(200).json({ success: 'Message received!' });
  } catch (error) {
    res.status(500).json({ error: 'Database error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
