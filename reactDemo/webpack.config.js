module.exports = {
  entry:[
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: "/build/",
    filename: 'bundle.js'
  },
    module: {
        loaders: [{
          test: //.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader', 
          query: {
            presets: ['es2015','react']  
          }
        }]
    }
};