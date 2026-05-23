import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'prefer-const': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react/self-closing-comp': 'error',
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  },
]

export default config
