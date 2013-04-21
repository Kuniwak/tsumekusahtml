// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for code publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HTMLElement = require(basePath + '/html/HTMLElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var CodePublisher = tsumekusa.DefaultPublishers.CODE.constructor;



/**
 * A class for code publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/CodePublisher}
 * @exports lib/HtmlCodePublisher
 */
var HtmlCodePublisher = function() {
  CodePublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlCodePublisher, CodePublisher);
util.addSingletonGetter(HtmlCodePublisher);


/** @override */
HtmlCodePublisher.prototype.getIndentWidth = function(content) {
  var indentWidth = this.getIndentWidthFromParent(content);
  return indentWidth + HtmlCodePublisher.INDENT_WIDTH;
};


/** @override */
HtmlCodePublisher.prototype.publish = function(code) {
  return this.createCodeDom(code).toString();
};


/**
 * Creates an anchor element.
 * @param {module:tsumekusa.Code} code Tsumekusa element.
 * @return {module:lib/html/AnchorElement} HTML element.
 * @protected
 */
HtmlCodePublisher.prototype.createCodeDom = function(code) {
  return new HTMLElement('pre', false, code.getCode());
};


// Export the constructor
module.exports = HtmlCodePublisher;
