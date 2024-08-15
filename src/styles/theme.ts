const color = {
  RED: '#FF0000',
  BLUE: '#0000FF',
  GREEN: '#00FF00',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GRAY: '#808080',
  LIGHT_GRAY: '#D3D3D3',
  DARK_GRAY: '#A9A9A9',
  YELLOW: '#FFFF00',
  ORANGE: '#FFA500',
  PURPLE: '#800080',
  PINK: '#FFC0CB',
  BROWN: '#A52A2A',
  TRANSPARENT: 'transparent',
} as const;

const spacing = {
  XS: 4,
  S: 8,
  M: 16,
  L: 24,
  XL: 32,
  XXL: 40,
} as const;

const typography = {
  FONT_SIZE: {
    H1: 26,
    H2: 24,
    H3: 20,
    Subtitle1: 18,
    Subtitle2: 16,
    Subtitle3: 14,
    Body1: 20,
    Body2: 18,
    Body3: 18,
  },
  FONT_WEIGHT: {
    Bold: 'bold',
    Regular: 'normal',
    Medium: '500',
  },
} as const;

export const theme = { color, spacing, typography };
export type CustomTheme = typeof theme;
