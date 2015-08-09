var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function () {
    return gulp.src('app/app.js')
        .pipe(webpackStream(require('./webpack.config.js')))
        .pipe(gulp.dest(''));
});
