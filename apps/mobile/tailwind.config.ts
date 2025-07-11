import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo2_400Regular'],
        'baloo-medium': ['Baloo2_500Medium'],
        'baloo-semibold': ['Baloo2_600SemiBold'],
        'baloo-bold': ['Baloo2_700Bold'],
        'baloo-extrabold': ['Baloo2_800ExtraBold'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
