// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
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
HtmlListPublisher.prototype.publish = function(list) {
  return this.createListDom(list).toString();
};


/**
 * Creates a HTML list element.
 * @param {module:tsumekusa.List} list Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlListPublisher.prototype.createListDom = function(list) {
  var tagName = list.getListType() === List.ListType.ORDERED ? 'ol' : 'ul';
  return new HtmlElement(tagName, false, list.getListItems().publish())
};


// Export the constructor
module.exports = HtmlListPublisher;
