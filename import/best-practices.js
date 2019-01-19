module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/first': 'error',
    'import/imports-first': 'off', // deprecated
    'import/no-anonymous-default-export': 'off',
    'import/no-absolute-path': 'error',
    'import/no-deprecated': 'warn', // this is an in progress rule
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    // 'global-require': 'off', // disable because no need to have both!
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-webpack-loader-syntax': 'error',
  },
};
