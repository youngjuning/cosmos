module.exports = {
  root: true,
  extends: ['@luozhu/eslint-config-base'],
  rules: {
    'func-names': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
  },
};
