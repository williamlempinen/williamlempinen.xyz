import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    ignores: ['node_modules', '**/cypress/support/**', '**/*.cy.tsx'],
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      eqeqeq: 'warn',
      'no-unused-vars': 'off',
      'prettier/prettier': ['warn'],
    },
  },
]
