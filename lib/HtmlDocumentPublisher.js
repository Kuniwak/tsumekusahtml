// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for document element publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');
var HtmlContainerPublisher = require(basePath + '/HtmlContainerPublisher');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;



/**
 * A class for document element publisher for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/HtmlContainerPublisher}
 * @exports lib/HtmlDocumentPublisher
 */
var HtmlDocumentPublisher = function() {
  HtmlContainerPublisher.call(this);
};
util.inherits(HtmlDocumentPublisher, HtmlContainerPublisher);
util.addSingletonGetter(HtmlDocumentPublisher);


/** @override */
HtmlDocumentPublisher.prototype.publish = function(element) {
  var output = HtmlContainerPublisher.prototype.publish.call(this, element);

  var doctype = new HtmlElement('!DOCTYPE', true);
  doctype.setAttribute('html', true);

  return doctype + output;
};


/** @override */
HtmlDocumentPublisher.prototype.createContainerDom = function(element,
    contents) {
  var head = this.createHeadDom(element).toString();
  var body = this.createBodyDom(element, contents).toString();

  return new HtmlElement('html', false, head + body).toString();
};


/**
 * Creates a HTML body element.
 * @param {module:tsumekusa.Document} element Tsumekusa element.
 * @param {string} contents Body contents.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDocumentPublisher.prototype.createBodyDom = function(element, contents) {
  return new HtmlElement('body', false, contents +
        this.createFootDoms(element).join(''));
};


/**
 * Creates a HTML head element.
 * @param {module:tsumekusa.Document} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDocumentPublisher.prototype.createHeadDom = function(element) {
  return new HtmlElement('head', false, this.createHeadDoms(element).join(''));
};


/**
 * Creates HTML elements in a head tag.
 * @param {module:tsumekusa.Document} element Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createHeadDoms = function(element) {
  var heads = [];

  var charset = new HtmlElement('meta', true);
  charset.setAttribute('charset', 'UTF-8');

  heads[0] = charset;
  heads[1] = this.createTitleDom(element);

  var css = this.createCssDoms(element);
  if (css.length > 0) {
    heads.push.apply(heads, css);
  }

  return heads;
};


/**
 * Creates a HTML title element.
 * @param {module:tsumekusa.Document} element Document.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDocumentPublisher.prototype.createTitleDom = function(element) {
  return new HtmlElement('title', false, element.getCaption());
};


/**
 * Creates HTML CSS elements.
 * @param {module:tsumekusa.Document} element Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createCssDoms = function(element) {
  return [];
};


/**
 * Creates HTML elements on a foot.
 * @param {module:tsumekusa.Document} element Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createFootDoms = function(element) {
  return this.createScriptDoms(element);
};


/**
 * Creates HTML script elements.
 * @param {module:tsumekusa.Document} element Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createScriptDoms = function(element) {
  return [];
};


// Export the constructor
module.exports = HtmlDocumentPublisher;
