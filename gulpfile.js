var gulp = require('gulp');
var path = require('path');
//var gutil = require('gulp-util');
//var webpack = require('webpack');
var webpack = require('webpack-stream');
//var WebpackDevServer = require('webpack-dev-server');

//gulp.task('webpack', function (callback) {
//    webpack({
//
//    }, function (err, stats) {
//        if (err) throw new gutil.PluginError('webpack', err);
//        gutil.log('[webpack]', stats.toString({
//
//        }));
//        callback();
//    })
//});
//
//gulp.task('serve', function (callback) {
//    var compiler = webpack({
//
//    });
//
//    new WebpackDevServer(compiler, {
//
//    }).listen(8080, 'localhost', function (err) {
//            if (err) throw new gutil.PluginError('webpack-dev-server', err);
//
//            gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
//        });
//});

gulp.task('default', function () {
    return gulp.src('app/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(''));
});