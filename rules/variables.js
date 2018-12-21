module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/variables')],
  rules: {
    'no-catch-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undefined': 'error',
  },
}
