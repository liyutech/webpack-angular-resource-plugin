var angularResourceUtil = require('../index.js');

describe("AngularResourcePlugin", function() {
	it("must require all Angular modules in the current directory and return an array of module names", function() {

		var controllerContext = require.context('.', true, /\.controller\.js$/);
		var controllerModules = angularResourceUtil.requireAll(controllerContext);
		console.log('controllerModules ' + controllerModules);

		var angular = require('angular');
		var uiRouter = require('angular-ui-router');
		controllerModules.push('uiRouter');
		var mainModule = angular.module('app', controllerModules);
		expect(controllerModules).toEqual(['app.landing', 'app.login', 'uiRouter']);
		expect(mainModule.requires).toEqual(controllerModules);


		var req = require.context(".", true,  /.*/);

		// require('css!./app');
		console.log('required landing.css' + req.keys());

		// var css = require("css!./app/landing/landing.css");

		// console.log('css ' + css);

		// var styleContext = require.context('..', true, /\.css$/);
		// 	console.log('styleContext ' + styleContext.keys());

		// var styles = angularResourceUtil.requireAll(styleContext);
		// console.log('styles ' + styles);

	});
});