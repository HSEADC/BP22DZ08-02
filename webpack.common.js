const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    dictionary: './src/dictionary.js'
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Chunk dictionary
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['dictionary']
    }),

    // Index заглушка
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),


    // // About о проекте
    // new HtmlWebpackPlugin({
    //    template: './src/about.html',
    //     filename: './about.html'
    //   }),

    // firstpage 1 стра разводящая
    new HtmlWebpackPlugin({
      template: './src/firstpage.html',
      filename: './firstpage.html',
      chunks: ['index']
    }),

    //Библиотека шрифтов
    new HtmlWebpackPlugin({
      template: './src/library.html',
      filename: './library.html',
      chunks: ['index']
    }),

     //Библиотека цветов
     new HtmlWebpackPlugin({
      template: './src/library_color.html',
      filename: './library_color.html',
      chunks: ['index']
    }),

     //Section
     new HtmlWebpackPlugin({
      template: './src/articals.html',
      filename: './articals.html',
      chunks: ['index']
    }),

     //Section
      new HtmlWebpackPlugin({
        template: './src/art1.html',
        filename: './art1.html',
        chunks: ['index']
    }),

         //Section
         new HtmlWebpackPlugin({
          template: './src/art2.html',
          filename: './art2.html',
          chunks: ['index']
      }),


    //Section
    new HtmlWebpackPlugin({
      template: './src/art3.html',
      filename: './art3.html',
      chunks: ['index']
  }),

    //Section
    new HtmlWebpackPlugin({
      template: './src/art5.html',
      filename: './art5.html',
      chunks: ['index']
  }),

//Section
new HtmlWebpackPlugin({
  template: './src/art6.html',
  filename: './art6.html',
  chunks: ['index']
}),

    //Section
    new HtmlWebpackPlugin({
      template: './src/art4.html',
      filename: './art4.html',
      chunks: ['index']
  }),

       //Section
       new HtmlWebpackPlugin({
        template: './src/articals_color.html',
        filename: './articals_color.html',
        chunks: ['index']
      }),

    
       //Section
       new HtmlWebpackPlugin({
        template: './src/articals_all.html',
        filename: './articals_all.html',
        chunks: ['index']
      }),

    //  // Article
    //  new HtmlWebpackPlugin({
    //   template: './src/articals/samooborona.html',
    //   filename: './articals/samooborona.html'
    // }),

    //  // Article
    //  new HtmlWebpackPlugin({
    //   template: './src/tests/aboutsafe.html',
    //   filename: './tests/aboutsafe.html'
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}