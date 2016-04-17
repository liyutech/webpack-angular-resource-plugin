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
			var required = requireContext(key);
			return required.default ? required.default.name : key;
		});
	}
};