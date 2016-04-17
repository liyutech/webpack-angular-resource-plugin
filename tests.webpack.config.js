"use strict";

var path = require("path");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css"
		}]
	}
};