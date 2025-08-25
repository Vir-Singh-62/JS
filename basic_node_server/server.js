const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));

// Define a GET endpoint that responds with JSON
app.get('/auth/me', (req, res) => {
  res.json({
    "statusCode": 200,
    "username": "testuser",
    "role": "user", 
    "email": "test@example.com",
    "verified": true,
    "permissions": ["read", "write"],
    "createdAt": "2024-01-15T10:30:00Z",
    "status": "active",
    "reason": "",
    "until": null,
    "timestamp": now()
  });
});

app.get('/auth/login', (req, res) => {
  res.json({
    "statusCode": 200,
    "message":"logged in successfully",
    "timestamp": now()
  });
});

app.get('/api/auth/login', (req, res) => {
    res.json({
      "statusCode": 200,
      "message":"logged in successfully",
      "timestamp": now()
    });
  });
  

app.get('/health', (req, res) => {
  res.json({
    "statusCode": 200,
    "message": "OK",
    "timestamp": now()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});   