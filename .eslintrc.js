module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-mixed-spaces-and-tabs': 0, // disable rule,
    'no-undef': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'react/prop-types': ['off'],
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-tabs': 0
  }
}
