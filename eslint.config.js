import storybook from "eslint-plugin-storybook";
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

// Base configuration
const baseConfig = {
  ignores: ['dist', '**/dist/**', '**/node_modules/**', '**/.storybook/**', '**/.next/**', '**/out/**'],
};

// TypeScript configuration
const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: {
      ...globals.browser,
      ...globals.es2020,
      ...globals.node,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'storybook': storybook,
  },
  rules: {
    // Base rules
    ...js.configs.recommended.rules,
    // TypeScript rules
    ...tseslint.configs.recommended.rules,
    // React Hooks rules
    ...reactHooks.configs.recommended.rules,
    // React Refresh rules
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Custom rules
    'no-unused-vars': 'off', // Disable the base rule
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
  },
};

// Storybook configuration
const storybookConfig = {
  files: ['.storybook/**/*.{js,jsx,ts,tsx}'],
  ...storybook.configs.flat,
};

export default [
  baseConfig,
  typescriptConfig,
  storybookConfig,
];
