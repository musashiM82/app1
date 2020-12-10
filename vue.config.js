const pkjson = require('./package.json');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';
const fileVersion = isProduction ? '.' + pkjson.version : '';

module.exports = {
    configureWebpack: {
        output: {
            filename: 'js/[name]' + fileVersion + '.js',
            chunkFilename: '[name]' + fileVersion + '.js',
            libraryTarget: "system",
            devtoolNamespace: 'app1'
        },
        externals: ['vue', 'vue-router'], //, 'vuex', 'axios'],
        plugins: [
            new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, reportFilename: './report.html' })
        ],
        devtool: 'sourcemap',
        optimization:
         {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'async'
                    }
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.module.rule('vue').use('vue-loader').tap(options => {
            options.hotReload = false;
            return options
        })
    }
};
