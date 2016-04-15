"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Authors
		Hao Qin hqin@liyutech
		Ying Xiong yingx@liyutech
*/

var __context;

function AngularResourcePlugin(context) {
	if (!!!context) {
		throw "Expected Context is not defined.";
	}
	__context = context;
};

AngularResourcePlugin.prototype.requiredModules = function() {
	var fileNameSegements = Array.prototype.slice.call(arguments);
	return __context.keys().filter(function(key) {
		return fileNameSegements.reduce(function(previousValue, currentValue) {
			return previousValue || key.indexOf(currentValue) >= 0;
		}, false);

	}).map(function(key) {
		var importModule = __context(key);
		return importModule.default? importModule.default.name: '';
	});
}

module.exports = AngularResourcePlugin;