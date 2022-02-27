const path = require('path');

module.exports = {
  entry: './src/figures.jnpm',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
