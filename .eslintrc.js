module.exports = {
  root: true,
  extends: ['@luozhu/eslint-config-base'],
  rules: {
    'func-names': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-param-reassign': 0,
    'no-multi-assign': 0,
    'no-continue': 0,
  },
};
