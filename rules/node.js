module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/node')],
  rules: {
    'handle-callback-err': 'error',
    'no-mixed-requires': ['error', { grouping: true, allowCall: false }],
    'no-process-exit': 'error',
  },
};
