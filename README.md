# angular-resource-plugin for webpack

Require all AngularJS modules for a Webpack project and return an array of the module names that can be used as dependencies of 
the main module. Can also batch require other resources such as style sheets and images.

<h3>Installation</h3>
<i>npm install angular-resource-plugin --save-dev</i>

<h3>Usage Example</h3>
In the entry point where the main angular module is defined, such as index.js or app.js, require the plugin:
<p><i>var AngularResourcePlugin = require('angular-resource-plugin');</i></p>

<p>Create an instance of the plugin, passing the webpack require object to the constructor:</p>
<p><i>const angularResourceUtil = new AngularResourcePlugin(require);</i></p>

<p>Require all css and less files under the current directory:</p>
<p><i>angularResourceUtil.requiredModules('.css', '.less');</i></p>

<p>Define the main Angular module. Also require all files whose name end with .controller.js which supposedy contain submodules.
Notice that the module names are returned as an array and passed to the factory method as dependencies of the main module:</p>
<p><i>export default angular.module('app', angularResourceUtil.requiredModules('.controller.js'));</i></p>

<h3>License</h3>

<p>MIT (<a>http://www.opensource.org/licenses/mit-license.php</a>)</p>
