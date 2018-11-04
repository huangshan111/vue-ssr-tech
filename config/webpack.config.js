const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development'
const uglify = require('uglifyjs-webpack-plugin');
const config = {
    mode: 'development',
    entry: './practice/index.js',
    output: { 
        path: path.resolve(__dirname,'../dist/'),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: [
        new uglify(),
        new HTMLPlugin({
            minify:{//对html文件进行压缩
                removeAttributeQuotes:true //removeAttrubuteQuotes是去掉属性的双引号。
            },
            hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./config/template.html' //打包html模版的路径和文件名称。
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    }
}

if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'

    config.devServer = {
        port: '80',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        // open: true,
        hot: true
    }

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;