export const AppFonts = {
  family: {
    // Standard Apple system fonts (San Francisco)
    sans: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Display"',
      '"SF Pro Text"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    mono: [
      '"SF Mono"',
      'ui-monospace',
      'Menlo',
      'Monaco',
      'monospace',
    ],
  },
  
  // Standard Apple iOS Human Interface Guidelines font sizes
  size: {
    caption2: ['11px', { lineHeight: '13px', letterSpacing: '0.066em' }],
    caption1: ['12px', { lineHeight: '16px', letterSpacing: '0em' }],
    footnote: ['13px', { lineHeight: '18px', letterSpacing: '-0.006em' }],
    subhead: ['15px', { lineHeight: '20px', letterSpacing: '-0.016em' }],
    callout: ['16px', { lineHeight: '21px', letterSpacing: '-0.02em' }],
    body: ['17px', { lineHeight: '22px', letterSpacing: '-0.024em' }], // Base iOS size
    headline: ['17px', { lineHeight: '22px', letterSpacing: '-0.024em' }],
    
    // Converted to fluid typography using clamp() for smooth mobile-first scaling
    title3: ['clamp(18px, 2vw + 10px, 20px)', { lineHeight: '1.3', letterSpacing: '0.019em' }],
    title2: ['clamp(20px, 2.5vw + 10px, 22px)', { lineHeight: '1.25', letterSpacing: '0.016em' }],
    title1: ['clamp(24px, 3vw + 10px, 28px)', { lineHeight: '1.2', letterSpacing: '0.013em' }],
    largeTitle: ['clamp(28px, 4vw + 12px, 34px)', { lineHeight: '1.15', letterSpacing: '0.011em' }],
    
    // Marketing sizes for Web Hero sections
    display2: ['clamp(36px, 5vw + 16px, 48px)', { lineHeight: '1.1', letterSpacing: '0.009em' }],
    display1: ['clamp(42px, 6vw + 16px, 60px)', { lineHeight: '1.1', letterSpacing: '0.007em' }],
  }
};
