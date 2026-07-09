import { AppColors } from './src/appcolors.js';
import { AppFonts } from './src/appfonts.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: AppFonts.family.sans,
        mono: AppFonts.family.mono,
      },
      fontSize: AppFonts.size,
      colors: {
        primary: {
          DEFAULT: AppColors.primary.light,
          dark: AppColors.primary.dark,
        },
        secondary: {
          DEFAULT: AppColors.primaryVariant,
        },
        app: {
          darkBg: AppColors.darkScaffoldBackground,
          darkCard: AppColors.darkCardBackground,
          darkCardElevated: AppColors.darkCardElevated,
          darkTextSec: AppColors.darkTextSecondary,
          primaryLight: AppColors.primaryLight,
          primaryVariant: AppColors.primaryVariant,
          darkPurple: AppColors.darkPurple,
          bgLight: AppColors.primaryBackgroundLight,
          slider: AppColors.sliderInactive,
          log: AppColors.log_screen_color,
          calories: AppColors.caloriesPrimary,
          calTrackLight: AppColors.caloriesTrack.light,
          calTrackDark: AppColors.caloriesTrack.dark,
          protein: AppColors.proteinPrimary,
          proteinTrack: AppColors.proteinTrack.light,
          carb: AppColors.carbPrimary,
          fat: AppColors.fatPrimary,
          water: AppColors.waterPrimary,
          waterTrack: AppColors.waterTrack.light,
          fiber: AppColors.fiberPrimary,
          steps: AppColors.stepsPrimary,
          workout: AppColors.workoutPrimary,
          weight: AppColors.weightPrimary,
          weightTrack: AppColors.weightTrack.light,
          sideEffect: AppColors.sideEffectPrimary,
          sideEffectTrack: AppColors.sideEffectTrack.light,
          medication: AppColors.medicationPrimary,
          medicationTrack: AppColors.medicationTrack.light,
          progress: AppColors.progress,
          greenLight: AppColors.greenLight.light,
          greenDark: AppColors.greenLight.dark,
        }
      }
    },
  },
  plugins: [],
}
