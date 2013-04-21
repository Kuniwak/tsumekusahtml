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
 * @exports lib/HtmlParagraphPublisher
 */
var HtmlParagraphPublisher = function() {
  ParagraphPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlParagraphPublisher, ParagraphPublisher);
util.addSingletonGetter(HtmlParagraphPublisher);


/** @override */
HtmlParagraphPublisher.prototype.publish = function(element) {
  return this.createParagraphDom(element).toString();
};


/**
 * Creates a HTML paragraph element.
 * @param {module:tsumekusa.Paragraph} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlParagraphPublisher.prototype.createParagraphDom = function(element) {
  var contents = element.getInlineElements().map(function(inline) {
    return typeof inline === 'string' ? inline : inline.publish();
  }).join(' ');

  var p = new HtmlElement('p', false, contents);

  var ref = element.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    p.setAttribute('id', refId);
  }

  return p;
};


// Export the constructor
module.exports = HtmlParagraphPublisher;
