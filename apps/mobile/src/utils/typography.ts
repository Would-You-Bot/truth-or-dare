export const fonts = {
  regular: 'Baloo2_400Regular',
  medium: 'Baloo2_500Medium',
  semiBold: 'Baloo2_600SemiBold',
  bold: 'Baloo2_700Bold',
  extraBold: 'Baloo2_800ExtraBold',
} as const;

export const typography = {
  // Headings
  h1: {
    fontFamily: fonts.bold,
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: fonts.bold,
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    lineHeight: 28,
  },
  
  // Body text
  body: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 24,
  },
  
  // Small text
  caption: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  captionMedium: {
    fontFamily: fonts.medium,
    fontSize: 14,
    lineHeight: 20,
  },
  
  // Button text
  button: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonLarge: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 28,
  },
} as const;

export type TypographyStyle = keyof typeof typography; 