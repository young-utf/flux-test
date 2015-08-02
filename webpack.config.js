/**
 * Created by youngmoon on 8/1/15.
 */

module.exports = {
    entry: "./app/js/app.js",
    output: {
        filename: 'app/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    }
}