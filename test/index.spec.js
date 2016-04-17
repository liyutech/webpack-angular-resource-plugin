var angularResourceUtil = require('../index.js');

describe("AngularResourcePlugin", function() {
	it("must require all Angular modules in the current directory and return an array of module names", function() {

		var controllerContext = require.context('.', true, /\.controller\.js$/);
		var controllerModules = angularResourceUtil.requireAll(controllerContext);

		var angular = require('angular');
		var uiRouter = require('angular-ui-router');
		controllerModules.push('uiRouter');
		console.log('controllerModules ' + controllerModules);

		var mainModule = angular.module('app', controllerModules);
		expect(controllerModules).toEqual(['app.landing', 'app.login', 'uiRouter']);
		expect(mainModule.requires).toEqual(controllerModules);

		var styleContext = require.context(".", true,  /.css$/);
		var styles = angularResourceUtil.requireAll(styleContext);
		console.log('styles ' + styles);
		expect(styles).toEqual(['./app/landing/landing.css']);
	});
});