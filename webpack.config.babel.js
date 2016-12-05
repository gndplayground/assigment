const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var commonConfig = {


    output: {
        path: path.join(__dirname, 'client', 'assets'),
        publicPath: '/assets/',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js|jsx?$/,
                use: ['eslint-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'babel-loader'
                    },
                ]
            },
            {
                enforce: 'pre',
                test: /(\.scss|\.css)$/,
                exclude: /node_modules/,
                loaders: ['postcss-loader'],
            },
            {
                test: /(\.scss|\.css)$/,
                use: ['style-loader', 'css-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },

    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};

var buildConfig = {

    entry: {
        js: [
            'babel-polyfill',
            './src/index.js'
        ],
    },

    devtool: 'cheap-module-source-map',

    plugins: [
        new CleanWebpackPlugin(['./client'], {
            root: process.cwd()
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true
            },
            mangle: {
                except: ['$'],
                screw_ie8: true
            },
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/build.html'
        })
    ],
};

var devConfig = {

    devtool: 'eval',

    entry: {
        js: [
            'babel-polyfill',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3030',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
    },

    devServer: {
        port: 3030,
        stats: 'errors-only',
        hot: true,
        contentBase: __dirname + "/src",
        historyApiFallback: {
            index: 'index.html'
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};

var config;
switch (process.env.npm_lifecycle_event) {


    case 'dev':

        config = merge(
            commonConfig,
            devConfig
        );

        break;

    case 'analyze':
    case 'build':

        config = merge(
            commonConfig,
            buildConfig
        );

        break;
}

module.exports = config;