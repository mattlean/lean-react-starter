const BabelWebpackPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => ([
      require('autoprefixer')()
    ])
  }
});

exports.clean = (path) => ({
  plugins: [
    new CleanWebpackPlugin([path])
  ]
});

exports.devServer = ({ contentBase, host, port } = {}) => ({
  devServer: {
    contentBase,
    historyApiFallback: true,
    host,
    overlay: {
      errors: true
    },
    port
  }
});

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle))
  )
});

exports.extractStyles = ({ exclude, include, use }) => {
  const plugin = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css'
  });

  return {
    module: {
      rules: [
        {
          exclude,
          include,
          test: /\.(css|scss)$/,
          use: plugin.extract({
            fallback: 'style-loader',
            use
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.genSourceMaps = ({ type }) => ({
  devtool: type
});

exports.lintJS = ({ exclude, include, options }) => ({
  module: {
    rules: [
      {
        exclude,
        include,
        loader: 'eslint-loader',
        options,
        test: /\.jsx?$/
      }
    ]
  }
});

exports.lintStyles = () => ({
  plugins: [
    new StyleLintPlugin()
  ]
});

exports.minCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      canPrint: false,
      cssProcessor: cssnano,
      cssProcessorOptions: options
    })
  ]
});

exports.minJS = () => ({
  plugins: [new BabelWebpackPlugin()]
});

exports.purifyCSS = ({ paths }) => ({
  plugins: [
    new PurifyCSSPlugin({paths})
  ]
});

exports.loadImgs = ({ exclude, include, options } = {}) => ({
  module: {
    rules: [
      {
        exclude,
        include,
        use: [
          {
            loader: 'url-loader',
            options
          }
        ],
        test: /\.(gif|jpe?g|png|svg)$/
      }
    ]
  }
});

exports.loadJS = ({ exclude, include }) => ({
  module: {
    rules: [
      {
        exclude,
        include,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        test: /\.jsx?$/
      }
    ]
  }
});

exports.loadStyles = ({ exclude, include } = {}) => ({
  module: {
    rules: [
      {
        exclude,
        include,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|scss)$/
      }
    ]
  }
});

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)]
  };
};
