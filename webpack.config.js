/**
 * Created by esc08andbott on 01/10/2016.
 */

var path = require("path");
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {

        app: ['./src/app.js'],
        vendor: ['angular', 'angular-ui-router', 'angular-messages']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[name].js'
    },

	
	/*
	node: {
		net: "empty",
		tls: "empty",
		fs: "empty",
	},
	*/
    module: {
        loaders:  [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.html$/, loader: 'html', exclude: /(node_modules|bower_components)/},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/i,loader:'file'},
            {test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?(\?.*$|$)/, loader: "file" },
            {test: /\.(woff|woff2)(\?.*$|$)/, loader:"url?prefix=font/&limit=5000" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?(\?.*$|$)/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?(\?.*$|$)/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
       /* new webpack.optimize.DedupePlugin(),

         new webpack.optimize.UglifyJsPlugin({
            screw_ie8: true,
            warnings: false
         }) */
    ]

};