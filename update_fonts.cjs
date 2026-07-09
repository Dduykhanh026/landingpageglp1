const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const map = {
  'xs': 'caption1',
  'sm': 'subhead',
  'base': 'body',
  'lg': 'title3',
  'xl': 'title3',
  '2xl': 'title2',
  '3xl': 'title1',
  '4xl': 'largeTitle',
  '5xl': 'display2',
  '6xl': 'display1',
  '7xl': 'display1',
};

function updateFonts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace text-{size} and responsive variants like md:text-{size}
  const regex = /\b(sm:|md:|lg:|xl:)?text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/g;
  
  content = content.replace(regex, (match, prefix, size) => {
    const newSize = map[size];
    return `${prefix || ''}text-${newSize}`;
  });
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function traverse(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      updateFonts(fullPath);
    }
  }
}

traverse(dir);
