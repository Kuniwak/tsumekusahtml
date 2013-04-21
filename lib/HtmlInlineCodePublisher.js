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
HtmlInlineCodePublisher.prototype.publish = function(code) {
  return this.createInlineCodeDom(code).toString();
};


/**
 * Create a HTML inline code element.
 * @param {module:tsumekusa.InlineCode} code Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlInlineCodePublisher.prototype.createInlineCodeDom = function(code) {
  return new HtmlElement('code', false, code.getCode());
};


// Exports the constructor.
module.exports = HtmlInlineCodePublisher;
