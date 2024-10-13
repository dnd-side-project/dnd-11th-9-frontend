import { StatusBar } from 'react-native';

export const SCREEN_SIZE = {
  WEB_WIDTH: 375,
  WEB_HEIGHT: 812,
} as const;

export const COMPONENT_SIZE = {
  HEADER_NAV: 64,
  BOTTOM_NAV: 86,
  STATUSBAR: (StatusBar.currentHeight = 0),
} as const;
