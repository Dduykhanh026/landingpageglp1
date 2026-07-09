const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

function removeBg(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace bg-white and bg-gray-50 in section classNames
  // We match `<section className="... bg-white ...">`
  content = content.replace(/(<section[^>]*className=["'][^"']*)(\s*bg-white\s*)([^"']*["'])/g, '$1 $3');
  content = content.replace(/(<section[^>]*className=["'][^"']*)(\s*bg-gray-50\s*)([^"']*["'])/g, '$1 $3');
  // Also clean up any double spaces left behind
  content = content.replace(/(<section[^>]*className=["'][^"']*)(\s{2,})([^"']*["'])/g, '$1 $3');
  
  // Also QuizSection has bg-app-greenLight
  content = content.replace(/(<section[^>]*className=["'][^"']*)(\s*bg-app-greenLight\s*)([^"']*["'])/g, '$1 $3');
  
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
      removeBg(fullPath);
    }
  }
}

traverse(dir);
