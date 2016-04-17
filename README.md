# webpack-angular-resource-plugin

Require all AngularJS modules for a Webpack project and return an array of the module names that can be used as dependencies of 
the main module. Can also batch require other resources such as style sheets and images.

<h3>Installation</h3>
<i>npm install webpack-angular-resource-plugin --save-dev</i>

<h3>Usage Example</h3>
In the entry point where the main angular module is defined, such as index.js or app.js, require the plugin:
<p><i>var angularResourceUtil = require('webpack-angular-resource-plugin');</i></p>

<p>Require all css files under the current directory and its subdirectories:</p>
<p><i>var styleContext = require.context(".", true,  /.css$/);</i></p>
<p><i>angularResourceUtil.requireAll(styleContext);</i></p>

<p>Define the main Angular module. Also require all files whose name end with .controller.js which contain submodules.
Notice that the module names are returned as an array and passed to the factory method as dependencies of the main module:</p>
<p><i>var controllerContext = require.context('.', true, /\.controller\.js$/)</i></p>
<p><i>export default angular.module('app', angularResourceUtil.requireAll(controllerContext));</i></p>
<h3>License</h3>

<p>MIT (<a>http://www.opensource.org/licenses/mit-license.php</a>)</p>