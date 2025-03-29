const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const http = require("http");
const io = require('./socket'); // Import the io instance
const path = require('path');
global.admin = 'QPuJfL32OVcqQFYlA5sehiCAHVb2'
// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
// const userRoutes = require("./api/tools");
// Create HTTP server
const server = http.createServer(app);
io(server); // Attach the io instance to the server
// Use routes
app.use(cors());
app.use(express.json());

global.rooms={
    default:null
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back the React app.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
});


// app.use("/api", userRoutes);

// Start the server
server.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
