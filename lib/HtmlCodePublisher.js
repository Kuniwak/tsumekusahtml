// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for code publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

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
HtmlCodePublisher.prototype.publish = function(element) {
  return this.createCodeDom(element).toString();
};


/**
 * Creates an anchor element.
 * @param {module:tsumekusa.Code} element Tsumekusa element.
 * @return {module:lib/html/AnchorElement} HTML element.
 * @protected
 */
HtmlCodePublisher.prototype.createCodeDom = function(element) {
  var code = new HtmlElement('pre', false, element.getCode());

  var ref = element.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    code.setAttribute('id', refId);
  }

  return code;
};


// Export the constructor
module.exports = HtmlCodePublisher;
