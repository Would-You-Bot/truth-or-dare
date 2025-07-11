export const COLORS = {
  red: '#FF613C',
  green: '#21BC70',
  white: '#FFFFFF',
  darkRed: '#C13939',
} as const;

export type ColorVariant = keyof typeof COLORS; 