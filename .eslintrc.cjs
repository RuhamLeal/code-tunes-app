module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'default-param-last': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-console': 'off',
    'quote-props': 'off',
    'dot-notation': 'off',
  },
};
