module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-alias-methods': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 12 }],
    'jest/no-test-prefixes': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/consistent-test-it': ['error', { 'fn': 'it' }],
    'jest/lowercase-name': 'error',
    'jest/no-hooks': 'off',
    'jest/no-jasmine-globals': 'warn',
    'jest/prefer-expect-assertions': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/expect-expect': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'error',
    'jest/no-test-callback': 'error',
    'jest/require-tothrow-message': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-spy-on': 'error',
  },
  env: {
    'jest/globals': true,
  },
};
