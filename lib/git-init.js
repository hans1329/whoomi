const { execSync } = require('child_process');

try {
  console.log('Initializing Git repository...');
  execSync('git init', { stdio: 'inherit' });
  console.log('Git repository initialized successfully.');
} catch (error) {
  console.error('Error initializing Git repository:', error.message);
}