// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib'
var HtmlPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var InlineCode = tsumekusa.InlineCode;
tsumekusa.registerPublishers(HtmlPublishers);

tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};

module.exports = {
  'Publish an inline code': function(test) {
    var code = new InlineCode('foo.bar()');

    test.equal(code.publish(), '<code>foo.bar()</code>');
    test.done();
  }
};
