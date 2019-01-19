module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    './stylistic.js',
    './node.js',
    './best-practices.js',
    './variables.js',
    './possible-errors.js',
    './import/index.js',
    './es6/index.js',
  ],
  rules: {},
};
