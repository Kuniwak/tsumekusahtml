// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlAnchorElement = require(basePath + '/html/HtmlAnchorElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var LinkPublisher = tsumekusa.DefaultPublishers.LINK.constructor;



/**
 * A class for link publisher for Vim help.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/LinkPublisher}
 * @exports lib/HtmlLinkPublisher
 */
var HtmlLinkPublisher = function() {
  LinkPublisher.call(this);
};
util.inherits(HtmlLinkPublisher, LinkPublisher);
util.addSingletonGetter(HtmlLinkPublisher);


/** @override */
HtmlLinkPublisher.prototype.publish = function(link) {
  return this.createLinkDom(link).toString();
};


/**
 * Creates an anchor element.  Override the method if you want to add
 * an attribute such as 'class'.
 * @param {module:tsumekusa.Link} link Tsumekusa element.
 * @return {tsumekusa.html.AnchorElement} HTML element.
 * @protected
 */
HtmlLinkPublisher.prototype.createLinkDom = function(link) {
  return new HtmlAnchorElement(link.getTargetReferenceId(),
      files.getHtmlFileName(refId));
};


// Exports the constructor.
module.exports = HtmlLinkPublisher;
