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
    title3: ['20px', { lineHeight: '25px', letterSpacing: '0.019em' }],
    title2: ['22px', { lineHeight: '28px', letterSpacing: '0.016em' }],
    title1: ['28px', { lineHeight: '34px', letterSpacing: '0.013em' }],
    largeTitle: ['34px', { lineHeight: '41px', letterSpacing: '0.011em' }],
    // Marketing sizes for Web Hero sections
    display2: ['48px', { lineHeight: '54px', letterSpacing: '0.009em' }],
    display1: ['60px', { lineHeight: '64px', letterSpacing: '0.007em' }],
  }
};
