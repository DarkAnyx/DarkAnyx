module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['./server/index.js'] }],
  },
};
