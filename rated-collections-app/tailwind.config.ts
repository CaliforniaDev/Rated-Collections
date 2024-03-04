import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#93D5AA',
      secondary: '#B5CCBA',
      'on-surface': '#DFE4DD',
      'on-surface-variant': '#C0C9C0',
      'surface-container': '#1C211D',
      'surface-container-high': '#262B27',
    },
    fontSize: {
      'body-lg': ['16px', '24px'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      rotate: {
        '270': '270deg',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      flex: {
        '2': '2 2 0%',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#F6FBF4', // surface
            foreground: '#181D19', // on-surface
            primary: {
              DEFAULT: '#2A6A47',
              foreground: '#FFFFFF',
            },
          },
        },

        dark: {
          colors: {
            background: '#0F1511', // surface
            foreground: '#DFE4DD', // on-surface
            primary: {
              DEFAULT: '#93D5AA',
              foreground: '#00391F',
            },
          },
        },
      },
    }),
  ],
};
export default config;
