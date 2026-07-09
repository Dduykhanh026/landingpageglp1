const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const uiDir = path.join(dir, 'ui');

function updateRadii(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory).filter(f => f.endsWith('.jsx'));
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace typical Tailwind radii with iOS-like large smooth radii
    content = content.replace(/rounded-xl/g, 'rounded-[20px]');
    content = content.replace(/rounded-2xl/g, 'rounded-[28px]');
    content = content.replace(/rounded-3xl/g, 'rounded-[32px]');
    
    // Some manual adjustments for specific files
    if (file === 'Card.jsx') {
      content = content.replace(/rounded-\[28px\]/g, 'rounded-[24px]'); // iOS standard card
    }

    fs.writeFileSync(filePath, content);
  });
}

updateRadii(dir);
updateRadii(uiDir);

console.log("Updated corner radii for iOS look.");
