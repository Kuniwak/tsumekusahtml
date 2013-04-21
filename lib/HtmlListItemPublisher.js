// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list item publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var ListItemPublisher = tsumekusa.DefaultPublishers.LIST_ITEM.constructor;



/**
 * A class for list item publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/IElementPublisher}
 * @exports lib/HtmlListItemPublisher
 */
var HtmlListItemPublisher = function() {
  ListItemPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlListItemPublisher, ListItemPublisher);
util.addSingletonGetter(HtmlListItemPublisher);


/** @override */
HtmlListItemPublisher.prototype.publish = function(element) {
  return this.createListDom(element).toString();
};


/**
 * Creates a HTML list item element.
 * @param {module:tsumekusa.List.ListItem} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlListItemPublisher.prototype.createListDom = function(element) {
  var li = new HtmlElement('li', false, element.getBlockElements().publish());

  var ref = element.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    li.setAttribute('id', refId);
  }

  return li;
};


// Export the constructor
module.exports = HtmlListItemPublisher;
