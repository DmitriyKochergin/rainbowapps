module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  ignorePatterns: ['**/*.config.js'], // '/*.*'
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': [2, { code: 300, ignorePattern: '^import .*' }],
    'jsx-a11y/no-autofocus': [2, { 'ignoreNonDOM': true }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
