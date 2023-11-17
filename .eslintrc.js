module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'eslint-config-next'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Add any custom rules here
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // disable defined but never used rule
    '@typescript-eslint/no-unused-vars': 'off',
    // disable no empty pattern
    '@typescript-eslint/no-empty-pattern': 'off',
    'next/core-web-vitals': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
