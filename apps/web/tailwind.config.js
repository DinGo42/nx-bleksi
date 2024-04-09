import { createGlobPatternsForDependencies } from '@nx/next/tailwind';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {},
  },
};
