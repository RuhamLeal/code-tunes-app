module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'default-param-last': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'quote-props': 'off',
    'dot-notation': 'off',
    'consistent-return': 'off',
  },
};
