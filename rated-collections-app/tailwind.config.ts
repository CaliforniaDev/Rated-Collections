import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#2A6A47',
      'on-primary': '#FFFFFF',
      secondary: '#B5CCBA',
      'on-surface': '#181D19',
      'on-surface-variant': '#414942',
      'surface-container': '#EAEFE8',
      'surface-container-high': '#E5EAE3',

      'primary-dark': '#93D5AA',
      'on-primary-dark': '#00391F',
      'on-surface-dark': '#DFE4DD',
      'on-surface-variant-dark': '#414942',
      'surface-container-dark': '#1C211D',
      'surface-container-high-dark': '#262B27',
    },
    fontSize: {
      'display-lg': ['57px', '64px'],
      'body-lg': ['16px', '24px'],
      'label-lg': ['14px', '20px'],
    },
    extend: {
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-roboto-flex)', 'sans-serif'],
      },
      strokeWidth: {
        '3': '3px',
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

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
export default config;
