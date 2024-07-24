require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  context: __dirname,
  entry: ['@babel/polyfill', `${__dirname}/components/index.js`],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS, using Node Sass by default
      ],
    }],
  },
  plugins: [],
  output: {
    filename: 'build.js',
    path: `${__dirname}/public/js`,
  },
  externals: {
    fs: 'commonjs fs',
  },

};
