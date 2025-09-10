module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.svelte']
  },
  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  plugins: ['unused-imports', 'tailwindcss'],
  overrides: [
    {
      files: ['*.svelte']
    },
    {
      files: ['*.js'],
      excludedFiles: ['*.d.ts']
    }
  ],
  rules: {
    // 🛑 Prevent console logs in production
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',

    // ✅ Code clarity and reliability
    'eqeqeq': ['error', 'always'],
    'no-implicit-coercion': 'warn',
    'no-unused-expressions': 'error',
    'consistent-return': 'warn',

    // 🧹 Clean up unused code
    'unused-imports/no-unused-imports': 'warn',
 

    // 🎨 Tailwind CSS class management
    'tailwindcss/classnames-order': 'warn',


  }
};
