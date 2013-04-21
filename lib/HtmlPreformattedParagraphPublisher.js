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
var PreformattedParagraphPublisher = tsumekusa.DefaultPublishers.PARAGRAPH.
    constructor;



/**
 * A class for paragraph publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/PreformattedParagraphPublisher}
 * @export lib/HtmlPreformattedParagraphPublisher
 */
var HtmlPreformattedParagraphPublisher = function() {
  PreformattedParagraphPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlPreformattedParagraphPublisher, PreformattedParagraphPublisher);
util.addSingletonGetter(HtmlPreformattedParagraphPublisher);


/** @override */
HtmlPreformattedParagraphPublisher.prototype.publish = function(pre) {
  return this.createPreformattedParagraphElement(pre).toString();
};


/**
 * Creates a HTML paragraph element.
 * @param {module:tsumekusa.PreformattedParagraph} pre Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlPreformattedParagraphPublisher.prototype.createPreformattedParagraphDom =
    function(pre) {
  return new HtmlElement('pre', false, p.getElement());
};


// Export the constructor
module.exports = HtmlPreformattedParagraphPublisher;
