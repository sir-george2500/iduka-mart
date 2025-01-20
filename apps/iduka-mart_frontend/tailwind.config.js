const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      'sans': 'Inter var, ui-sans-serif, system-ui',
      'serif': 'Inter var, ui-serif, system-ui',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000ff',
          'primary-content': '#ffffff',
          secondary: '#f6f6f6',
          neutral: '#f6f6f6',
        }
      }
    ]
  },
  base: true,
  style: true,
  utils: true,
  prefix: '',
  log: true,
  themeRoot: ':root',
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
