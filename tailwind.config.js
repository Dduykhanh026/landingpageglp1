import { AppColors } from './src/appcolors.js';
import { AppFonts } from './src/appfonts.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '50%': { transform: 'translateY(-15px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-2deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      fontFamily: {
        sans: AppFonts.family.sans,
        mono: AppFonts.family.mono,
      },
      fontSize: AppFonts.size,
      dropShadow: {
        'mockup': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
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
