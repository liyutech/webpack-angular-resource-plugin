"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Authors
		Hao Qin hqin@liyutech
		Ying Xiong yingx@liyutech
*/
module.exports = {
	requireAll: function(requireContext) {
		return requireContext.keys().map(function(key) {
			var importModule = requireContext(key);
			return importModule.default ? importModule.default.name : key;
		});
	}
};