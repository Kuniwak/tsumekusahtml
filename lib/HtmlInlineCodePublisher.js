// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for inline code publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var InlineCodePublisher = tsumekusa.DefaultPublishers.INLINE_CODE.constructor;


/**
 * A singleton class for inline code publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/InlineCodePublisher}
 * @exports lib/HtmlInlineCodePublisher
 */
var HtmlInlineCodePublisher = function() {
  InlineCodePublisher.call(this);
};
util.inherits(HtmlInlineCodePublisher, InlineCodePublisher);
util.addSingletonGetter(HtmlInlineCodePublisher);


/** @override */
HtmlInlineCodePublisher.prototype.publish = function(element) {
  return this.createInlineCodeDom(element).toString();
};


/**
 * Create a HTML inline code element.
 * @param {module:tsumekusa.InlineCode} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlInlineCodePublisher.prototype.createInlineCodeDom = function(element) {
  var code = new HtmlElement('code', false, element.getCode());

  var ref = element.getReference(), refId;
  if (refId = ref.getReferenceId()) {
    code.setAttribute('id', refId);
  }

  return code;
};


// Exports the constructor.
module.exports = HtmlInlineCodePublisher;
