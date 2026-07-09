const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace specific hardcoded hex values
  content = content.replace(/bg-\[\#383838\]/g, 'bg-app-darkCardElevated');
  content = content.replace(/hover:bg-black/g, 'hover:bg-app-darkBg');
  
  // Replace arbitrary tailwind colors with our AppColors equivalents
  
  // Emerald/Green to Primary/GreenLight
  content = content.replace(/bg-emerald-50/g, 'bg-app-greenLight');
  content = content.replace(/bg-emerald-100/g, 'bg-app-greenLight');
  content = content.replace(/text-emerald-500/g, 'text-primary');
  content = content.replace(/text-emerald-600/g, 'text-primary-dark');
  content = content.replace(/text-emerald-700/g, 'text-primary-dark');
  
  // Blue to Water
  content = content.replace(/bg-blue-50/g, 'bg-app-waterTrack');
  content = content.replace(/bg-blue-100/g, 'bg-app-waterTrack');
  content = content.replace(/text-blue-500/g, 'text-app-water');
  content = content.replace(/text-blue-600/g, 'text-app-water');
  
  // Indigo to Weight
  content = content.replace(/bg-indigo-50/g, 'bg-app-weightTrack');
  content = content.replace(/bg-indigo-100/g, 'bg-app-weightTrack');
  content = content.replace(/text-indigo-500/g, 'text-app-weight');
  content = content.replace(/text-indigo-600/g, 'text-app-weight');
  
  // Amber/Yellow to Carb or SideEffect
  content = content.replace(/bg-amber-50/g, 'bg-app-carbTrack');
  content = content.replace(/bg-amber-100/g, 'bg-app-carbTrack');
  content = content.replace(/text-amber-500/g, 'text-app-carb');
  content = content.replace(/text-amber-600/g, 'text-app-carb');
  
  content = content.replace(/bg-yellow-50/g, 'bg-app-sideEffectTrack');
  content = content.replace(/bg-yellow-100/g, 'bg-app-sideEffectTrack');
  content = content.replace(/text-yellow-700/g, 'text-app-sideEffect');
  content = content.replace(/text-yellow-800/g, 'text-app-sideEffect');
  
  // Red/Rose to Protein or Workout
  content = content.replace(/bg-red-50/g, 'bg-app-proteinTrack');
  content = content.replace(/bg-red-100/g, 'bg-app-proteinTrack');
  content = content.replace(/text-red-500/g, 'text-app-protein');
  content = content.replace(/text-red-600/g, 'text-app-protein');
  content = content.replace(/text-red-800/g, 'text-app-protein');
  
  content = content.replace(/bg-rose-50/g, 'bg-app-workoutTrack');
  content = content.replace(/bg-rose-100/g, 'bg-app-workoutTrack');
  content = content.replace(/text-rose-500/g, 'text-app-workout');
  
  // Purple to Fat
  content = content.replace(/bg-purple-50/g, 'bg-app-medicationTrack');
  content = content.replace(/bg-purple-100/g, 'bg-app-medicationTrack');
  content = content.replace(/text-purple-500/g, 'text-app-medication');
  content = content.replace(/text-purple-600/g, 'text-app-medication');
  
  // Gray Backgrounds to Dark Card or App BgLight
  content = content.replace(/bg-gray-800/g, 'bg-app-darkCard');
  content = content.replace(/bg-gray-900/g, 'bg-app-darkBg');
  
  fs.writeFileSync(filePath, content);
});

console.log("Colors replaced successfully.");
