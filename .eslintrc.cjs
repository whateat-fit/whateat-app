module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': true,
  },
};
