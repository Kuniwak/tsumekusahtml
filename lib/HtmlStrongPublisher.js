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
var StrongPublisher = tsumekusa.DefaultPublishers.STRONG.constructor;



/**
 * A class for strong word publisher for vim help.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/StrongPublisher}
 */
var HtmlStrongPublisher = function() {
  StrongPublisher.call(this);
};
util.inherits(HtmlStrongPublisher, StrongPublisher);
util.addSingletonGetter(HtmlStrongPublisher);


/** @override */
HtmlStrongPublisher.prototype.publish = function(element) {
  return this.createStrongDom(element);
};


/**
 * Creates a HTML strong element.
 * @param {module:tsumekusa.Strong} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlStrongPublisher.prototype.createStrongDom = function(element) {
  var strong = new HtmlElement('strong', false, element.getElement());

  var ref = element.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    strong.setAttribute('id', refId);
  }

  return strong;
};


// Export the constructor
module.exports = HtmlStrongPublisher;
