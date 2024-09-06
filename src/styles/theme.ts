import { rgba } from 'polished';

export const color = {
  Primary: {
    Normal: '#1A75FF',
    Sub: '#7D5EF7',
  },
  Label: {
    Normal: '#171719',
    Strong: '#000000',
    Neutral: '#46474C',
    Alternative: '#878A93',
    Assistive: '#C2C4C8',
    Disable: '#DBDCDF',
  },
  Background: {
    Normal: '#FFFFFF',
    Alternative: '#F7F7F8',
  },
  Interaction: {
    Inactive: '#989BA2',
    Disable: '#F7F7F8',
  },
  Text: {
    /* Todo 속성 변경 */
    OnViewDisabled: rgba(24, 26, 32, 0.15),
  },
  Border: {
    OutLine: rgba(24, 26, 32, 0.15),
  },
  Line: {
    Normal: 'rgba(112, 115, 124, 0.22)',
    Neutral: 'rgba(112, 115, 124, 0.16)',
    Alternative: 'rgba(112, 115, 124, 0.08)',
  },
  Status: {
    Success: '#00BF40',
    Warning: '#FF4242',
    Error: '#00AEFF',
  },
  Accent: {
    RedOrange: '#FF5E00',
    Cyan: '#00BDDE',
    LightBlue: '#00AEFF',
    Violet: '#4F29E5',
    Purple: '#CB59FF',
    Pink: '#F553DA',
  },
  Component: {
    Fill: 'rgba(112, 115, 124, 0.08)',
    Strong: 'rgba(112, 115, 124, 0.16)',
    Alternative: 'rgba(112, 115, 124, 0.05)',
  },
  Material: {
    Dimmer: 'rgba(23, 23, 25, 0.52)',
  },
} as const;

export const theme = { color };
export type CustomTheme = typeof theme;
