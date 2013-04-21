// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib'
var HtmlPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var PreformattedParagraph = tsumekusa.PreformattedParagraph;
tsumekusa.registerPublishers(HtmlPublishers);

tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};

var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

exports.testPublish = function(test) {
  var p = new PreformattedParagraph(LOREM_IPSUM);

  var CORRECT = '<pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</pre>';

  test.equal(p.publish(), CORRECT);
  test.done();
};
