module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'no-await-in-loop': 'error',
    'babel/no-await-in-loop': 'off', // deprecated
    'babel/valid-typeof': 'error',
    'valid-typeof': 'off',
  },
};
