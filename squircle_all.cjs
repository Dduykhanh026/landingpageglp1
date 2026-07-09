const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  if (!content.includes("import { Squircle }")) {
    content = "import { Squircle } from '@squircle-js/react';\n" + content;
  }

  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

const dir = path.join(__dirname, 'src', 'components');

// 1. SolutionSection.jsx
replaceInFile(path.join(dir, 'SolutionSection.jsx'), [
  [
    '<div className="lg:w-5/12 bg-white/10 p-8 rounded-[32px] backdrop-blur-sm border border-white/20">',
    '<Squircle cornerRadius={32} cornerSmoothing={1} className="lg:w-5/12 bg-white/10 p-8 backdrop-blur-sm border border-white/20">'
  ],
  [
    '</div>\n        </div>\n      </div>\n    </section>',
    '</Squircle>\n        </div>\n      </div>\n    </section>' // Close Squircle
  ],
  [
    /<div className="bg-white rounded-\[20px\] p-4 text-gray-800 shadow-lg">/g,
    '<Squircle cornerRadius={20} cornerSmoothing={1} className="bg-white p-4 text-gray-800 shadow-lg">'
  ],
  [
    /<\/div>\n\s+<\/div>\n\s+<div className="bg-white rounded-\[20px\]/g,
    '</Squircle>\n              </div>\n              <div className="bg-white rounded-[20px]'
  ],
  // We need precise closing tags. This might be too tricky with regex.
]);

// Actually, this manual string replacement in a script is very brittle.
