var webpack = require('webpack');
var path=require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js(x)*$/,
            //test: /\.js$/,
            // uxcore以外的modules都不需要经过babel解析
            exclude: function (path) {
                var isNpmModule = !!path.match(/node_modules/);
                var isUxcore = !!path.match(/node_modules\/uxcore/) || !!path.match(/node_modules\/@ali\/uxcore/);
                return isNpmModule & !isUxcore;
            },
            loader: 'babel-loader?stage=1',
            query: {
                presets: ['es2015','react']
            }
                        
        }, {
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'jsx-loader!babel-loader'
        },{
            test: /\.css$/,
            exclude: /node_modules/,
			loaders: ['style-loader', 'css-loader']
        }]
    },
};
