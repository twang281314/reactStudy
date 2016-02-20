var gulp=require('gulp');
var connect=require('gulp-connect');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

gulp.task('connect',function(){
    connect.server({
       root: '.',
       port:3001,
       livereload: true,
       fallback: 'index.html' 
    });
});

gulp.task("webpack", function() {
    return gulp
        .src('./')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default',['connect','webpack']);


