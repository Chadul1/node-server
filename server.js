const http = require('http'); // Import the http module

// Create a server object
const server = http.createServer((req, res) => {
  res.statusCode = 200;                 // HTTP status code 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello, World!\n');           // Send the response body
});

// Define the port and hostname
const port = 3000;
const hostname = 'localhost';

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});