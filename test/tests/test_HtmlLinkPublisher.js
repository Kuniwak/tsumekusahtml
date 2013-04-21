// This script licensed under the MIT.
// http://orgachem.mit-license.org

var basePath = '../../lib'
var HtmlPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var Reference = tsumekusa.Reference;
var Link = tsumekusa.Link;
tsumekusa.registerPublishers(HtmlPublishers);

tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};

module.exports = {
  'Publish a link': function(test) {
    var ref = new Reference('id', 'file_name.html');
    var link = new Link(ref);

    test.equal(link.publish(), '<a href="file_name.html#id">id</a>');
    test.done();
  }
};
