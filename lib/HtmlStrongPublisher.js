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
HtmlStrongPublisher.prototype.publish = function(strong) {
  return this.createStrongDom(strong);
};


/**
 * Creates a HTML strong element.
 * @param {module:tsumekusa.Strong} strong Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML element.
 */
HtmlStrongPublisher.prototype.createStrongDom = function(strong) {
  return new HtmlElement('strong', false, strong.getElement());
};


// Export the constructor
module.exports = HtmlStrongPublisher;
