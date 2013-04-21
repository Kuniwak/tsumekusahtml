// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlAnchorElement = require(basePath + '/html/HtmlAnchorElement');
var uriUtil = require(basePath + '/uriUtil');

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
HtmlLinkPublisher.prototype.publish = function(element) {
  return this.createLinkDom(element).toString();
};


/**
 * Creates an anchor element.  Override the method if you want to add
 * an attribute such as 'class'.
 * @param {module:tsumekusa.Link} element Tsumekusa element.
 * @return {tsumekusa.html.AnchorElement} HTML element.
 * @protected
 */
HtmlLinkPublisher.prototype.createLinkDom = function(element) {
  var tgtRef = element.getTargetReference();
  var fileUri = uriUtil.getFileUri(tgtRef);
  var a = new HtmlAnchorElement(tgtRef.getReferenceId(), fileUri);

  var ref = element.getReference(), refId;
  if (refId = ref.getReferenceId()) {
    a.setAttribute('id', refId);
  }
  return a;
};


// Exports the constructor.
module.exports = HtmlLinkPublisher;
