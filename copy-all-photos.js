const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'Photos');
const publicPhotosDir = path.join(__dirname, 'public', 'Photos');

// Ensure public/Photos directory exists
if (!fs.existsSync(publicPhotosDir)) {
  fs.mkdirSync(publicPhotosDir, { recursive: true });
}

// Read all files from Photos directory
const files = fs.readdirSync(photosDir);

files.forEach(file => {
  const source = path.join(photosDir, file);
  const dest = path.join(publicPhotosDir, file);
  
  try {
    fs.copyFileSync(source, dest);
    console.log(`${file} copied successfully to public/Photos/`);
  } catch (error) {
    console.error(`Error copying ${file}:`, error.message);
  }
});

console.log('All photos copied successfully!');

