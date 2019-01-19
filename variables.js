const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'init-declarations': 'off',
    'no-catch-shadow': 'off', // deprecated
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
