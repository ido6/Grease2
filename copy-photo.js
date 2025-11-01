const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'Photos', 'Photo1.png');
const dest = path.join(__dirname, 'public', 'Photos', 'Photo1.png');

try {
  fs.copyFileSync(source, dest);
  console.log('Photo1.png copied successfully to public/Photos/');
} catch (error) {
  console.error('Error copying file:', error.message);
  process.exit(1);
}
