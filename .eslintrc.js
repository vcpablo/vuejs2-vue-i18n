module.exports = {
  env: {
    node: true,
    jest: true
  },
  globals: {
    expect: 'writable',
    assert: 'writable'
  },
  plugins: ['vue', 'prettier', 'jest', 'vue-a11y'],
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-a11y/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier/vue',
    '@vue/prettier'
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'vue/attribute-hyphenation': 'off',
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'no-var': 2
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  }
}
