const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
    'react/lib/ReactTransitionGroup': 'React.addons.TransitionGroup',
    'react/lib/ReactCSSTransitionGroup': 'React.addons.CSSTransitionGroup'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};