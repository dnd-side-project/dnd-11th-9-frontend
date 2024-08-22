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

export const theme = { color };
export type CustomTheme = typeof theme;
