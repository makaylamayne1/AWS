const { PHPServer } = require('php-server-manager');

// Define the directory containing your PHP files
const directory = './public';

// Create a new PHP server instance
const server = new PHPServer({
  directory,
  port: 3000, // Specify the port for the PHP server
  directives: {
    'display_errors': 1, // Enable PHP error display for debugging
  }
});

// Start the PHP server
server.run();

// Output server URL
console.log(`PHP server running at http://localhost:${server.getPort()}`);
