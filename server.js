const { createRequestHandler } = require('@remix-run/vercel');
const { installGlobals } = require('@remix-run/node');

installGlobals();

// Import the server build that was created by `remix build`
const serverBuild = require('./build');

module.exports = createRequestHandler({
  build: serverBuild,
  mode: process.env.NODE_ENV,
});
