"use strict";

var path = require("path");

module.exports = {
	context: path.resolve(__dirname, 'test'),
	entry: {},
	preloaders: [{
		test: /\.js$/,
		exclude: [
			/node_modules/,
			/\.spec\.js$/
		],
		loader: 'isparta-instrumenter'
	}],
	loaders: [{
		test: /\.css$/,
		loader: "style!css"
	}, ],
	devtool: 'inline-source-map'
};