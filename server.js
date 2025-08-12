const { createRequestHandler } = require('@remix-run/vercel');
const { installGlobals } = require('@remix-run/node');

// Install globals for node-fetch and other Web APIs
installGlobals();

// Import the server build that was created by `remix build`
let serverBuild;
try {
  serverBuild = require('./build');
} catch (error) {
  console.error('Failed to load server build:', error);
  process.exit(1);
}

// Create request handler with error handling
const requestHandler = createRequestHandler({
  build: serverBuild,
  mode: process.env.NODE_ENV,
  getLoadContext() {
    // You can add any server-side context here if needed
    return {};
  },
});

// Export the request handler for Vercel
module.exports = async (req, res) => {
  try {
    // Handle CORS if needed
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Handle OPTIONS method for CORS preflight
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).end();
      return;
    }
    
    // Process the request
    return requestHandler(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
};
