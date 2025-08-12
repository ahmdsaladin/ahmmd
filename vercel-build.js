const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running Vercel build script...');

// Ensure the build directory exists
const buildDir = path.join(process.cwd(), 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Run Remix build
try {
  console.log('Running Remix build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Setting up Node.js server...');
  execSync('npx remix setup node', { stdio: 'inherit' });
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
