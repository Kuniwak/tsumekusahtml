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
var DefinitionPublisher = tsumekusa.DefaultPublishers.DEFINITION.constructor;



/**
 * A class for list item publisher for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/IElementPublisher}
 * @exports lib/HtmlDefinitionPublisher
 */
var HtmlDefinitionPublisher = function() {
  DefinitionPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlDefinitionPublisher, DefinitionPublisher);
util.addSingletonGetter(HtmlDefinitionPublisher);


/** @override */
HtmlDefinitionPublisher.prototype.publish = function(element) {
  var def = this.createDefinitionDoms(element);
  return def.join('');
};


/**
 * Creates a HTML definition elements.
 * @param {module:tsumekusa/Definition} element Tsumekusa element.
 * @return {Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDefinitionPublisher.prototype.createDefinitionDoms = function(element) {
  var arr = [
    this.createDefinitionTermDom(element),
    this.createDefinitionDescriptionsDom(element)
  ];
  return arr;
};


/**
 * Creates a HTML definition term element.
 * @param {module:tsumekusa/Definition} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDefinitionPublisher.prototype.createDefinitionTermDom = function(
    element) {
  var term = element.getTerm().getInlineElements().join('');
  return new HtmlElement('dt', false, term);
}


/**
 * Creates a HTML definition descriptions element.
 * @param {module:tsumekusa/Definition} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDefinitionPublisher.prototype.createDefinitionDescriptionsDom =
    function(element) {
  var descriptions = element.getDescriptions().publish();
  return new HtmlElement('dd', false, descriptions);
}


// Export the constructor
module.exports = HtmlDefinitionPublisher;
