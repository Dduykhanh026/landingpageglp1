const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

const dir = path.join(__dirname, 'src', 'components');

const sizes = {
  'rounded-none': 0,
  'rounded-sm': 2,
  'rounded': 4,
  'rounded-md': 6,
  'rounded-lg': 8,
  'rounded-xl': 12,
  'rounded-2xl': 16,
  'rounded-3xl': 24,
  'rounded-full': 100
};

function processFile(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });

  let needsImport = false;
  let hasImport = false;

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === '@squircle-js/react') {
        hasImport = true;
      }
    },
    JSXElement(path) {
      const openingElement = path.node.openingElement;
      
      // Skip if it's already a Squircle
      if (t.isJSXIdentifier(openingElement.name) && openingElement.name.name === 'Squircle') {
        return;
      }
      
      let classNameAttr = openingElement.attributes.find(
        attr => t.isJSXAttribute(attr) && attr.name.name === 'className'
      );

      if (classNameAttr) {
        let hasRounded = false;
        let radius = null;
        
        const extractClasses = (classNameValue) => {
          let classes = classNameValue.split(' ');
          let newClasses = [];
          
          for (let c of classes) {
            // Directional border radius should be skipped/kept, meaning we DO NOT change the element to Squircle 
            // if it has ONLY directional ones, or we just keep them in className.
            // But if it has a full rounded class, we extract radius.
            
            // Check for directional explicitly to skip it from radius matching
            if (c.match(/^rounded-[tblr]-/)) {
               newClasses.push(c);
               continue;
            }
            
            let pxMatch = c.match(/^rounded-\[?(\d+)px\]?$/);
            let remMatch = c.match(/^rounded-\[?([\d\.]+)rem\]?$/);
            
            if (pxMatch) {
              hasRounded = true;
              radius = parseInt(pxMatch[1]);
            } else if (remMatch) {
              hasRounded = true;
              radius = Math.round(parseFloat(remMatch[1]) * 16);
            } else if (sizes[c] !== undefined) {
              hasRounded = true;
              radius = sizes[c];
            } else if (c.startsWith('rounded-')) {
               newClasses.push(c);
            } else {
              newClasses.push(c);
            }
          }
          return newClasses.join(' ');
        };

        if (t.isStringLiteral(classNameAttr.value)) {
          let newClassStr = extractClasses(classNameAttr.value.value);
          if (hasRounded && radius !== null) {
            classNameAttr.value = t.stringLiteral(newClassStr);
          }
        } 
        else if (t.isJSXExpressionContainer(classNameAttr.value) && t.isTemplateLiteral(classNameAttr.value.expression)) {
          const template = classNameAttr.value.expression;
          for (let quasi of template.quasis) {
             let newStr = extractClasses(quasi.value.raw);
             quasi.value.raw = newStr;
             quasi.value.cooked = newStr;
          }
        }
        
        if (hasRounded && radius !== null && radius > 0) {
          needsImport = true;
          
          openingElement.name = t.jsxIdentifier('Squircle');
          if (path.node.closingElement) {
            path.node.closingElement.name = t.jsxIdentifier('Squircle');
          }
          
          openingElement.attributes.push(
            t.jsxAttribute(t.jsxIdentifier('cornerRadius'), t.jsxExpressionContainer(t.numericLiteral(radius)))
          );
          openingElement.attributes.push(
            t.jsxAttribute(t.jsxIdentifier('cornerSmoothing'), t.jsxExpressionContainer(t.numericLiteral(1)))
          );
        }
      }
    }
  });

  if (needsImport && !hasImport) {
    const importAst = parser.parse("import { Squircle } from '@squircle-js/react';", { sourceType: 'module' });
    ast.program.body.unshift(importAst.program.body[0]);
  }

  if (needsImport) {
    const output = generator(ast, { retainLines: false, compact: false }, code);
    fs.writeFileSync(filePath, output.code);
    console.log(`Transformed ${filePath}`);
  }
}

function traverseDir(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDir(dir);
