var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path=require('path');

module.exports = {
    entry: {
        entry1: './main.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
/*    resolve: {
        extensions: ['', '.js', '.jsx']
    },*/
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          
        }, {
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonsPlugin]
};