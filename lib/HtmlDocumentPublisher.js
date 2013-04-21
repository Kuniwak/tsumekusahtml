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
HtmlDocumentPublisher.prototype.publishHeader = function(doc) {
  var header = [
    '<!DOCTYPE html>',
    '<html>',
    this.createHeadDom(doc),
    '<body>'
  ].join('');
  return header;
};


/** @override */
HtmlDocumentPublisher.prototype.publishFooter = function(doc) {
  var html = [
    '</body>',
    '</html>'
  ];

  var foots = this.createFootDoms(doc);
  if (foots.length > 0) {
    html.unshift(foots.join(''));
  }

  return html.join('');
};


/**
 * Creates a HTML head element.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDocumentPublisher.prototype.createHeadDom = function(doc) {
  return new HtmlElement('head', false, this.createHeadDoms(doc).join(''));
};


/**
 * Creates HTML elements in a head tag.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createHeadDoms = function(doc) {
  var heads = [];

  var charset = new HtmlElement('meta', true);
  charset.setAttribute('charset', 'UTF-8');

  heads[0] = charset;
  heads[1] = this.createTitleDom(doc);

  var css = this.createCssDoms(doc);
  if (css.length > 0) {
    heads.push.apply(heads, css);
  }

  return heads;
};


/**
 * Creates a HTML title element.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlDocumentPublisher.prototype.createTitleDom = function(doc) {
  return new HtmlElement('title', false, doc.getCaption());
};


/**
 * Creates HTML CSS elements.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createCssDoms = function(doc) {
  return [];
};


/**
 * Creates HTML elements on a foot.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createFootDoms = function(doc) {
  return this.createScriptDoms(doc);
};


/**
 * Creates HTML script elements.
 * @param {module:tsumekusa.Document} doc Document.
 * @return {!Array.<module:lib/html/HtmlElement>} HTML elements.
 */
HtmlDocumentPublisher.prototype.createScriptDoms = function(doc) {
  return [];
};


// Export the constructor
module.exports = HtmlDocumentPublisher;
