// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var List = tsumekusa.List;
var util = tsumekusa.util;
var ListPublisher = tsumekusa.DefaultPublishers.LIST.constructor;



/**
 * A class for list publisher for vim help.
 * @constructor
 * @implements {module:tsumekusa/lib/publishing/IElementPublisher}
 * @exports lib/HtmlListPublisher
 */
var HtmlListPublisher = function() {
  ListPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlListPublisher, ListPublisher);
util.addSingletonGetter(HtmlListPublisher);


/** @override */
HtmlListPublisher.prototype.publish = function(element) {
  return this.createListDom(element).toString();
};


/**
 * Creates a HTML list element.
 * @param {module:tsumekusa.List} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlListPublisher.prototype.createListDom = function(element) {
  var tagName = element.getListType() === List.ListType.ORDERED ? 'ol' : 'ul';
  var list = new HtmlElement(tagName, false, element.getListItems().publish());

  var ref = element.getReference(), refId;
  if (refId = ref.getReferenceId()) {
    list.setAttribute('id', refId);
  }

  return list;
};


// Export the constructor
module.exports = HtmlListPublisher;
