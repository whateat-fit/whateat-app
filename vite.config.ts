import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import postcss from './postcss.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  css: {
    // @ts-ignore
    postcss,
  },
});
