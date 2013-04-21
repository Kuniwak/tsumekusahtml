// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for paragraph publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var ParagraphPublisher = tsumekusa.DefaultPublishers.PARAGRAPH.constructor;



/**
 * A class for paragraph publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/ParagraphPublisher}
 * @export lib/HtmlParagraphPublisher
 */
var HtmlParagraphPublisher = function() {
  ParagraphPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlParagraphPublisher, ParagraphPublisher);
util.addSingletonGetter(HtmlParagraphPublisher);


/** @override */
HtmlParagraphPublisher.prototype.publish = function(p) {
  return this.createParagraphDom(p).toString();
};


/**
 * Creates a HTML paragraph element.
 * @param {module:tsumekusa.Paragraph} p Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlParagraphPublisher.prototype.createParagraphDom = function(p) {
  return new HtmlElement('p', false, p.getInlineElements().map(function(elem) {
    return typeof elem === 'string' ? elem : elem.publish(); }).join(' '));
};


// Export the constructor
module.exports = HtmlParagraphPublisher;
