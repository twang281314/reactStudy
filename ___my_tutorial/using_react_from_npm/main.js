
//main.js
var React= require('react');
var ReactDOM= require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

/*
To install React DOM and build your bundle with browserify:
$ npm install --save react react-dom babelify babel-preset-react
$ browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js

To install React DOM and build your bundle with webpack:
$ npm install --save react react-dom babel-preset-react
$ webpack

Note:
If you are using ES2015, you will want to also use the babel-preset-es2015 package.


Note: by default, React will be in development mode, which is slower, and not advised for production. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin). For example:

new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

*/