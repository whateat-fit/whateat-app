import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import tailwindConfig from './tailwind.config.cjs';

export default {
  // @ts-expect-error
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
