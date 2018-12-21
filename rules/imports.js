module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/imports')],
  rules: {
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
  },
};
