const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const parts = require('./webpack.parts');

const PATHS = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

const commonConfig = merge([
  {
    context: __dirname,

    entry: {
      app: `${PATHS.src}/script.jsx`
    },

    output: {
      filename: '[name].js',
      path: PATHS.build
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.src}/index.ejs`
      })
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },

    stats: {
      chunks: true,
      colors: true,
      reasons: true
    }
  },

  parts.lintJS({
    include: PATHS.src,
    options: { emitWarning: true }
  }),

  parts.lintStyles({ include: PATHS.src }),

  parts.loadJS({ include: PATHS.src })
]);

const prodConfig = merge([
  {
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js'
    },

    performance: {
      hints: 'warning',
      maxAssetSize: 450000,
      maxEntrypointSize: 200000
    },

    plugins: [new webpack.HashedModuleIdsPlugin()],

    recordsPath: path.join(__dirname, 'records.json')
  },

  parts.clean(PATHS.build),

  parts.minJS(),

  parts.minCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  }),

  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
    },
    {
      minChunks: Infinity,
      name: 'manifest'
    }
  ]),

  // parts.genSourceMaps({ type: 'source-map' }),

  parts.extractStyles({ use: ['css-loader', 'sass-loader', parts.autoprefix()] }),

  parts.purifyCSS({
    paths: glob.sync(`${PATHS.src}/**/*.{js,jsx}`, { nodir: true })
  }),

  parts.loadImgs({
    options: {
      limit: 15000,
      name: './asset/img/[name].[hash:8].[ext]'
    }
  }),

  parts.setFreeVariable('process.env.NODE_ENV', 'production')
]);

const devConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      publicPath: 'http://localhost:8080/'
    }
  },

  parts.genSourceMaps({ type: 'cheap-eval-source-map' }),

  parts.devServer({
    contentBase: PATHS.build,
    host: process.env.HOST,
    port: process.env.PORT
  }),

  parts.loadStyles(),

  parts.loadImgs()
]);

module.exports = env => {
  if (env === 'production') {
    return merge(commonConfig, prodConfig);
  } else if (env === 'debug') {
    /* eslint-disable */
    console.log('webpack config debug started...');
    debugger;
    /* eslint-enable */
  }

  return merge(commonConfig, devConfig);
};
