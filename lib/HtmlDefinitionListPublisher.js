// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for definition list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var DefinitionListPublisher = tsumekusa.DefaultPublishers.DEFINITION_LIST.
    constructor;



/**
 * A class for definition list publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/DefinitionListPublisher}
 * @exports lib/HtmlDefinitionListPublisher
 */
var HtmlDefinitionListPublisher = function() {
  DefinitionListPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlDefinitionListPublisher, DefinitionListPublisher);
util.addSingletonGetter(HtmlDefinitionListPublisher);


/** @override */
HtmlDefinitionListPublisher.prototype.publish = function(element) {
  var dl = this.createDefinitionListDom(element);
  return dl.toString();
};


/**
 * Creates a HTML definition list element.
 * @param {module:tsumekusa/DefinitionList} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDefinitionListPublisher.prototype.createDefinitionListDom = function(
    element) {
  var dl = new HtmlElement('dl', false, element.getDefinitions().publish());

  var ref = element.getReference();
  if (refId = ref.getReferenceId()) {
    dl.setAttribute('id', refId);
  }

  return dl;
};


// Export the constructor
module.exports = HtmlDefinitionListPublisher;
