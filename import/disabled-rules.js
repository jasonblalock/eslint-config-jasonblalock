module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'import/max-dependencies': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/unambiguous': 'off', // not sure I understand this rule well enough right now...
    'import/no-relative-parent-imports': 'off',
  },
};
