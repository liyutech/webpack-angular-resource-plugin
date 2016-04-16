

var AngularResourcePlugin = require('../index.js');
const angularResourceUtil = new AngularResourcePlugin(require);

var path = require("path");

describe("AngularResourcePlugin", function() {
	it("must require all Angular modules in the current directory and return an array of module names", function() {
		var controllerModules = angularResourceUtil.requiredModules('.controller.js');
		var angular = require('angular');
		var uiRouter = require('angular-ui-router');
		controllerModules.push('uiRouter');
		var mainModule = angular.module('app', controllerModules);
		expect(controllerModules).toEqual(['app.landing', 'app.login', 'uiRouter']);
		expect(mainModule.requires).toEqual(controllerModules);

	});
});